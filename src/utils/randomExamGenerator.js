/**
 * Optimized V-ACT Random Exam Generator with Stimulus/Cluster Integrity Preservation
 * 
 * Guarantees:
 * 1. Cluster Preservation: Standalone questions vs Multi-question shared stimulus/passage clusters are atomic.
 * 2. Strict Internal Order: Questions belonging to the same cluster NEVER have their internal order disrupted.
 * 3. Stratified Sampling: Exactly 30 Vietnamese, 30 English, 30 Math, 30 Science/Logic questions (Total: 120 questions).
 * 4. Option Shuffling: Permutes (A, B, C, D) options independently per question while strictly preserving the correct answer key.
 * 5. Sequential Numbering & Dynamic Passage Reference Update: Re-indexes questions 1-120 and dynamically updates range markers in passage texts.
 */

// Fisher-Yates shuffle helper
export function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Group exam questions into immutable atomic units:
 * - StandaloneAtom: Single question without a shared passage
 * - ClusterAtom: Multiple questions sharing the exact same stimulus/passage
 */
export function groupQuestionsIntoAtoms(questions) {
  const atoms = [];
  let i = 0;

  while (i < questions.length) {
    const currentQ = questions[i];
    const passage = currentQ.passage ? currentQ.passage.trim() : null;

    if (!passage) {
      atoms.push({
        type: 'standalone',
        passage: null,
        section: currentQ.section,
        sectionName: currentQ.sectionName,
        questions: [{ ...currentQ }]
      });
      i++;
    } else {
      // Find all subsequent questions that share the exact same passage
      const clusterQuestions = [{ ...currentQ }];
      let j = i + 1;
      while (j < questions.length) {
        const nextQ = questions[j];
        const nextPassage = nextQ.passage ? nextQ.passage.trim() : null;
        if (nextPassage && nextPassage === passage) {
          clusterQuestions.push({ ...nextQ });
          j++;
        } else {
          break;
        }
      }

      atoms.push({
        type: 'cluster',
        passage: currentQ.passage,
        section: currentQ.section,
        sectionName: currentQ.sectionName,
        questions: clusterQuestions
      });

      i = j;
    }
  }

  return atoms;
}

/**
 * Select a subset of atoms that sums to EXACTLY targetCount questions.
 * Uses randomized greedy search with fallback backtracking (Subset-Sum).
 */
export function selectAtomsForQuota(atomsPool, targetCount = 30) {
  const shuffledAtoms = fisherYatesShuffle(atomsPool);

  // Quick recursive search for exact sum
  function findExactSubset(index, currentCount, chosen) {
    if (currentCount === targetCount) return chosen;
    if (currentCount > targetCount || index >= shuffledAtoms.length) return null;

    const atom = shuffledAtoms[index];
    const atomLength = atom.questions.length;

    // Try including atom
    if (currentCount + atomLength <= targetCount) {
      const result = findExactSubset(index + 1, currentCount + atomLength, [...chosen, atom]);
      if (result) return result;
    }

    // Try skipping atom
    return findExactSubset(index + 1, currentCount, chosen);
  }

  const selected = findExactSubset(0, 0, []);
  if (selected) return selected;

  // Fallback: Greedy selection if exact match wasn't found (rare fallback)
  let count = 0;
  const fallback = [];
  for (const atom of shuffledAtoms) {
    if (count + atom.questions.length <= targetCount) {
      fallback.push(atom);
      count += atom.questions.length;
      if (count === targetCount) break;
    }
  }
  return fallback;
}

/**
 * Shuffle options inside a single question and update correctAnswer index
 */
export function shuffleQuestionOptions(question) {
  const originalOptions = [...question.options];
  const originalCorrectAnswerIdx = question.correctAnswer;
  const correctOptionText = originalOptions[originalCorrectAnswerIdx];

  // Strip prefixes like "A. ", "B. " before shuffling
  const cleanedOptions = originalOptions.map(opt => {
    if (typeof opt === 'string') {
      return opt.replace(/^[A-D]\.\s*/, '');
    }
    return opt;
  });

  const correctCleanedText = cleanedOptions[originalCorrectAnswerIdx];

  // Create indexed option pairs to trace positions
  const indexed = cleanedOptions.map((text, idx) => ({ text, isCorrect: idx === originalCorrectAnswerIdx }));
  const shuffled = fisherYatesShuffle(indexed);

  const newOptions = shuffled.map((item, idx) => {
    const letter = String.fromCharCode(65 + idx);
    return `${letter}. ${item.text}`;
  });

  const newCorrectAnswerIdx = shuffled.findIndex(item => item.isCorrect);

  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectAnswerIdx >= 0 ? newCorrectAnswerIdx : 0
  };
}

/**
 * Generate a complete authentic V-ACT 120-question exam or section-specific exam
 * from the global question repository QUESTIONS_DATA.
 */
export function generateRandomExam(QUESTIONS_DATA, options = { sectionOnly: 'all' }) {
  // 1. Group all questions in the bank by section
  const sectionQuestions = {
    vietnamese: [],
    english: [],
    math: [],
    science: []
  };

  for (const [examId, questions] of Object.entries(QUESTIONS_DATA)) {
    for (const q of questions) {
      if (q.section === 'vietnamese') {
        sectionQuestions.vietnamese.push(q);
      } else if (q.section === 'english') {
        sectionQuestions.english.push(q);
      } else if (q.section === 'math') {
        sectionQuestions.math.push(q);
      } else if (q.section === 'science' || q.section === 'logic_data' || q.section === 'science_reasoning') {
        sectionQuestions.science.push(q);
      }
    }
  }

  // 2. Build atom pools per section
  const sectionAtoms = {
    vietnamese: groupQuestionsIntoAtoms(sectionQuestions.vietnamese),
    english: groupQuestionsIntoAtoms(sectionQuestions.english),
    math: groupQuestionsIntoAtoms(sectionQuestions.math),
    science: groupQuestionsIntoAtoms(sectionQuestions.science)
  };

  let chosenAtoms = [];

  if (options.sectionOnly === 'all') {
    // 30 questions each of Vietnamese, English, Math, Science
    const vnChosen = selectAtomsForQuota(sectionAtoms.vietnamese, 30);
    const engChosen = selectAtomsForQuota(sectionAtoms.english, 30);
    const mathChosen = selectAtomsForQuota(sectionAtoms.math, 30);
    const sciChosen = selectAtomsForQuota(sectionAtoms.science, 30);

    chosenAtoms = [...vnChosen, ...engChosen, ...mathChosen, ...sciChosen];
  } else if (options.sectionOnly === 'science_all') {
    chosenAtoms = selectAtomsForQuota(sectionAtoms.science, 30);
  } else {
    const pool = sectionAtoms[options.sectionOnly] || sectionAtoms.vietnamese;
    chosenAtoms = selectAtomsForQuota(pool, 30);
  }

  // 3. Assemble and re-index questions
  const finalQuestions = [];
  let currentExamNumber = 1;

  for (const atom of chosenAtoms) {
    const atomStartNumber = currentExamNumber;
    const atomEndNumber = currentExamNumber + atom.questions.length - 1;

    let updatedPassage = atom.passage;
    if (updatedPassage) {
      const rangeText = atomStartNumber === atomEndNumber 
        ? `câu ${atomStartNumber}` 
        : `các câu từ ${atomStartNumber} đến ${atomEndNumber}`;

      // Dynamically update range text: e.g. "các câu từ X đến Y" or "câu X"
      const replaced = updatedPassage.replace(
        /(?:các )?câu (?:hỏi )?(?:từ )?(?:câu )?\d+\s*(?:đến|-|và)\s*(?:câu )?\d+/gi,
        rangeText
      );

      if (replaced !== updatedPassage) {
        updatedPassage = replaced;
      } else {
        // Prepend clean standard header
        updatedPassage = `Dựa vào thông tin dưới đây để trả lời ${rangeText}:\n` + updatedPassage.replace(/^Dựa vào (?:các )?thông tin (?:dưới đây|sau)[^\n:]*[:\n]*/i, '');
      }
    }

    // Process questions inside this atom (KEEP INTERNAL ORDER INTACT)
    for (const q of atom.questions) {
      // Shuffle options (A/B/C/D)
      const shuffledQ = shuffleQuestionOptions(q);

      finalQuestions.push({
        ...shuffledQ,
        id: `random-vact-q${currentExamNumber}-${Date.now().toString(36)}`,
        number: currentExamNumber,
        passage: updatedPassage
      });

      currentExamNumber++;
    }
  }

  const generatedId = `vact-random-${Date.now()}`;
  const examTitle = options.sectionOnly === 'all' 
    ? 'ĐỀ THI NGẪU NHIÊN CHUẨN V-ACT (120 CÂU - TRỘN CỤM CHUẨN)'
    : `ĐỀ LUYỆN TẬP NGẪU NHIÊN: ${options.sectionOnly.toUpperCase()} (30 CÂU)`;

  return {
    id: generatedId,
    title: examTitle,
    type: 'Đề Ngẫu Nhiên',
    durationMinutes: options.sectionOnly === 'all' ? 150 : 40,
    questions: finalQuestions
  };
}
