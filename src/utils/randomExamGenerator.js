/**
 * HỆ THỐNG PHÂN PHỐI CÂU HỎI & NGỮ LIỆU ĐỀ THI NGẪU NHIÊN CHUẨN V-ACT
 * (Advanced Question & Stimulus Distribution Engine)
 *
 * Các nguyên tắc bảo toàn nghiêm ngặt:
 * 1. BẢO TOÀN TRỌN VẸN CỤM NGỮ LIỆU (Atomic Cluster Integrity):
 *    - Các câu hỏi thuộc cùng một bài đọc, bảng số liệu, biểu đồ hoặc logic chung (Cluster Atom)
 *      luôn luôn được lấy trọn vẹn 100% (không bao giờ xé lẻ 1 hay 2 câu).
 *    - Giữ nguyên thứ tự logic chuẩn bên trong cụm ngữ liệu.
 * 2. CHỐNG TRÙNG LẶP NỘI DUNG (Deduplication Gate):
 *    - Sử dụng chữ ký ngữ liệu (Stimulus Signature) và dấu vân tay câu hỏi (Question Fingerprint)
 *      để loại trừ triệt để việc bốc lại cùng một cụm câu hỏi từ các đề song sinh.
 * 3. XÁO TRỘN PHƯƠNG ÁN AN TOÀN (Safe Option Permutation):
 *    - Chỉ xáo trộn A/B/C/D khi các phương án độc lập.
 *    - Tự động nhận diện và KHÔNG xáo trộn nếu phương án chứa tham chiếu tương đối
 *      (ví dụ: "Cả A và B đều đúng", "Cả 2 đều đúng", "Ý A và C đúng", v.v.).
 *    - Cập nhật chính xác 100% khóa đáp án (correctAnswer) tương ứng sau xáo trộn.
 * 4. CẬP NHẬT TIÊU ĐỀ DẢI CÂU DỘNG (Dynamic Passage Range Renumbering):
 *    - Tự động thay thế tiêu đề dải câu (ví dụ: "Dựa vào thông tin dưới đây để trả lời các câu từ X đến Y")
 *      khớp chính xác tuyệt đối với số thứ tự mới của câu hỏi trong đề ngẫu nhiên.
 * 5. PHÂN PHỐI CHUẨN ĐÚNG CƠ CẤU 4 HỢP PHẦN:
 *    - 30 câu Tiếng Việt (1 - 30)
 *    - 30 câu Tiếng Anh (31 - 60)
 *    - 30 câu Toán học (61 - 90)
 *    - 30 câu Tư duy Khoa học & Logic (91 - 120)
 */

// Thuật toán xáo trộn Fisher-Yates
export function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Tạo dấu vân tay chuẩn hóa cho đoạn văn / ngữ liệu
function getPassageSignature(passage) {
  if (!passage) return null;
  // Bỏ qua dòng tiêu đề "Dựa vào thông tin..." để lấy phần thân ngữ liệu cốt lõi
  const cleanBody = passage
    .replace(/^Dựa vào (?:các )?thông tin [^\n:]*[:\n]*/i, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
  return cleanBody.substring(0, 120);
}

// Tạo dấu vân tay cho câu hỏi
function getQuestionFingerprint(q) {
  const text = (q.question || '').replace(/\s+/g, ' ').trim().toLowerCase();
  return text.substring(0, 80);
}

/**
 * Kiểm tra xem câu hỏi có chứa các phương án tham chiếu tương đối hay không
 * Nếu có (ví dụ: "Cả A và B", "Cả 2 đều đúng"), TUYỆT ĐỐI KHÔNG XÁO TRỘN PHƯƠNG ÁN!
 */
export function hasRelativeOptionReferences(options) {
  if (!options || !Array.isArray(options)) return true;
  const relativePatterns = [
    /cả\s+[A-D]\s+và\s+[A-D]/i,
    /cả\s+(?:hai|2)\s+đều\s+(?:đúng|sai)/i,
    /cả\s+(?:ba|3|bốn|4)\s+đều/i,
    /ý\s+[A-D]\s+(?:và|hoặc)\s+[A-D]/i,
    /phương án\s+[A-D]/i,
    /đáp án\s+[A-D]/i,
    /câu\s+[A-D]\s+(?:đúng|sai)/i,
    /không có (?:phương án|đáp án) nào/i,
    /tất cả (?:các )?đáp án trên/i
  ];

  return options.some(opt => {
    const text = typeof opt === 'string' ? opt : '';
    return relativePatterns.some(regex => regex.test(text));
  });
}

/**
 * Xáo trộn phương án câu hỏi một cách an toàn và chuẩn xác
 */
export function shuffleQuestionOptions(question) {
  const originalOptions = [...question.options];
  const originalCorrectAnswerIdx = question.correctAnswer;

  // Nếu câu hỏi có chứa tham chiếu tương đối giữa các phương án -> GIỮ NGUYÊN THỨ TỰ
  if (hasRelativeOptionReferences(originalOptions)) {
    return { ...question };
  }

  // Tách tiền tố A. B. C. D.
  const cleanedOptions = originalOptions.map(opt => {
    if (typeof opt === 'string') {
      return opt.replace(/^[A-D]\.\s*/, '').trim();
    }
    return opt;
  });

  const indexed = cleanedOptions.map((text, idx) => ({
    text,
    isCorrect: idx === originalCorrectAnswerIdx
  }));

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
 * Phân tích và nhóm ngân hàng câu hỏi thành các Đơn vị Nguyên tử (Atoms):
 * - StandaloneAtom: Câu hỏi độc lập không ngữ liệu
 * - ClusterAtom: Trọn vẹn cụm câu hỏi gắn liền với ngữ liệu chung (bảo toàn nguyên vẹn 100%)
 */
export function groupQuestionsIntoAtoms(questions) {
  const atoms = [];
  const processedQuestions = new Set();
  let i = 0;

  while (i < questions.length) {
    const currentQ = questions[i];
    if (processedQuestions.has(currentQ.id)) {
      i++;
      continue;
    }

    const passage = currentQ.passage ? currentQ.passage.trim() : null;
    const clusterId = currentQ.clusterId || null;
    const pSig = getPassageSignature(passage);

    if (!passage && !clusterId) {
      atoms.push({
        type: 'standalone',
        passage: null,
        clusterId: null,
        signature: getQuestionFingerprint(currentQ),
        section: currentQ.section,
        sectionName: currentQ.sectionName,
        questions: [{ ...currentQ }]
      });
      processedQuestions.add(currentQ.id);
      i++;
    } else {
      // Tìm tất cả các câu hỏi thuộc cùng một cụm ngữ liệu trong đề
      const clusterQuestions = [{ ...currentQ }];
      processedQuestions.add(currentQ.id);

      let j = i + 1;
      while (j < questions.length) {
        const nextQ = questions[j];
        if (processedQuestions.has(nextQ.id)) {
          j++;
          continue;
        }

        const nextPassage = nextQ.passage ? nextQ.passage.trim() : null;
        const nextClusterId = nextQ.clusterId || null;
        const nextSig = getPassageSignature(nextPassage);

        const isSameCluster =
          (clusterId && nextClusterId && clusterId === nextClusterId) ||
          (pSig && nextSig && pSig === nextSig);

        if (isSameCluster) {
          clusterQuestions.push({ ...nextQ });
          processedQuestions.add(nextQ.id);
          j++;
        } else {
          break;
        }
      }

      atoms.push({
        type: 'cluster',
        passage: currentQ.passage,
        clusterId: clusterId || pSig,
        signature: clusterId || pSig,
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
 * Thuật toán phân phối chọn tập hợp Atoms đạt chính xác hạn ngạch targetCount (30 câu)
 * Kết hợp Subset-Sum quy hoạch động + tìm kiếm ngẫu nhiên có kiểm tra chống trùng ngữ liệu
 */
export function selectAtomsForQuota(atomsPool, targetCount = 30) {
  // Lọc bỏ các atom trùng lặp signature trong pool
  const uniqueSignatureMap = new Map();
  for (const atom of atomsPool) {
    if (!uniqueSignatureMap.has(atom.signature)) {
      uniqueSignatureMap.set(atom.signature, []);
    }
    uniqueSignatureMap.get(atom.signature).push(atom);
  }

  // Chọn đại diện duy nhất cho mỗi signature
  const candidateAtoms = [];
  for (const [, list] of uniqueSignatureMap.entries()) {
    const randomPick = list[Math.floor(Math.random() * list.length)];
    candidateAtoms.push(randomPick);
  }

  const shuffledAtoms = fisherYatesShuffle(candidateAtoms);

  // Tìm kiếm tập con có tổng số câu bằng chính xác targetCount
  function findExactSubset(index, currentCount, chosen, usedSignatures) {
    if (currentCount === targetCount) return chosen;
    if (currentCount > targetCount || index >= shuffledAtoms.length) return null;

    const atom = shuffledAtoms[index];
    const atomLength = atom.questions.length;

    // Nếu chưa dùng signature này và kích thước phù hợp
    if (!usedSignatures.has(atom.signature) && currentCount + atomLength <= targetCount) {
      usedSignatures.add(atom.signature);
      const result = findExactSubset(
        index + 1,
        currentCount + atomLength,
        [...chosen, atom],
        usedSignatures
      );
      if (result) return result;
      usedSignatures.delete(atom.signature);
    }

    // Thử bỏ qua atom này
    return findExactSubset(index + 1, currentCount, chosen, usedSignatures);
  }

  const selected = findExactSubset(0, 0, [], new Set());
  if (selected) return selected;

  // Phương án dự phòng an toàn (Greedy fallback)
  let count = 0;
  const fallback = [];
  const fallbackSigs = new Set();
  for (const atom of shuffledAtoms) {
    if (!fallbackSigs.has(atom.signature) && count + atom.questions.length <= targetCount) {
      fallback.push(atom);
      fallbackSigs.add(atom.signature);
      count += atom.questions.length;
      if (count === targetCount) break;
    }
  }

  return fallback;
}

/**
 * Cập nhật tiêu đề dải câu ngữ liệu khớp chính xác với số thứ tự mới
 */
export function updatePassageRangeHeader(passageText, startNumber, endNumber) {
  if (!passageText) return null;

  let rangeText = '';
  if (startNumber === endNumber) {
    rangeText = `câu ${startNumber}`;
  } else if (endNumber === startNumber + 1) {
    rangeText = `các câu ${startNumber} và ${endNumber}`;
  } else {
    rangeText = `các câu từ ${startNumber} đến ${endNumber}`;
  }

  const headerRegex = /^Dựa vào (?:các )?thông tin (?:dưới đây|sau)[^\n:]*[:\n]*/i;
  const body = passageText.replace(headerRegex, '').trim();

  return `Dựa vào thông tin dưới đây để trả lời ${rangeText}:\n${body}`;
}

/**
 * Kiểm tra xem ngữ liệu (passage) có đầy đủ và hợp lệ để đưa vào Đề thi Ngẫu nhiên không
 * Loại bỏ các cụm bị cắt cụt (chỉ còn trích dẫn nguồn) hoặc phụ thuộc hình ảnh rời không có ảnh kèm theo.
 */
function isClusterPassageValid(passage, hasImage = false) {
  if (!passage) return true; // Câu độc lập không có passage vẫn hợp lệ
  const body = passage
    .replace(/^Dựa vào (?:các )?thông tin [^\n:]*[:\n]*/i, '')
    .trim();
  // Quá ngắn (< 40 ký tự) hoặc chỉ là trích nguồn bị cắt cụt
  if (body.length < 40) return false;
  if (/^(?:Báo Người Lao Động|,\s*với\s+\$?[A-Z]?\$?\s*là nhiệt độ)/i.test(body)) return false;
  if (/PMID:\s*\d+\)\.?$/i.test(body) && body.length < 250) return false;
  // Phụ thuộc hình ảnh / đồ thị rời mà không có thuộc tính image
  if (!hasImage && /\((?:xem\s+)?hình\s+(?:bên\s+)?(?:dưới|trên|sau|vẽ)\)|\b(?:hình vẽ|hình bên dưới|đồ thị dưới|biểu đồ dưới|như hình dưới)\b/i.test(body)) {
    return false;
  }
  return true;
}

/**
 * HÀM TẠO ĐỀ THI NGẪU NHIÊN CHUẨN HOÁ TOÀN DIỆN
 */
export function generateRandomExam(QUESTIONS_DATA, options = { sectionOnly: 'all' }) {
  // 1. Phân loại câu hỏi theo 4 hợp phần từ tất cả các đề
  const sectionQuestions = {
    vietnamese: [],
    english: [],
    math: [],
    science: []
  };

  for (const [, questions] of Object.entries(QUESTIONS_DATA)) {
    for (const q of questions) {
      // Bỏ qua cụm dữ liệu khuyết bài đọc gốc hoặc phụ thuộc hình ảnh rời
      if (q.clusterId === 'cluster_navigos_incomplete') continue;
      if (!isClusterPassageValid(q.passage, Boolean(q.image || q.img))) continue;
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

  // 2. Gom nhóm thành các Atomic Units bảo toàn cụm ngữ liệu
  const sectionAtoms = {
    vietnamese: groupQuestionsIntoAtoms(sectionQuestions.vietnamese),
    english: groupQuestionsIntoAtoms(sectionQuestions.english),
    math: groupQuestionsIntoAtoms(sectionQuestions.math),
    science: groupQuestionsIntoAtoms(sectionQuestions.science)
  };

  let chosenAtoms = [];

  if (options.sectionOnly === 'all') {
    // Mỗi phần đúng 30 câu: Tiếng Việt, Tiếng Anh, Toán học, Tư duy Khoa học
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

  // 3. Đánh số lại thứ tự tuần tự từ 1 đến 120 và cập nhật tiêu đề ngữ liệu động
  const finalQuestions = [];
  let currentExamNumber = 1;

  for (const atom of chosenAtoms) {
    const atomStartNumber = currentExamNumber;
    const atomEndNumber = currentExamNumber + atom.questions.length - 1;

    // Cập nhật tiêu đề ngữ liệu động khớp tuyệt đối với số câu mới
    const updatedPassage = atom.passage
      ? updatePassageRangeHeader(atom.passage, atomStartNumber, atomEndNumber)
      : null;

    // Xử lý từng câu hỏi trong cụm (BẢO TOÀN NGUYÊN VẸN THỨ TỰ BÊN TRONG CỤM)
    for (const q of atom.questions) {
      const processedQ = shuffleQuestionOptions(q);

      finalQuestions.push({
        ...processedQ,
        id: `random-vact-q${currentExamNumber}-${Date.now().toString(36)}`,
        number: currentExamNumber,
        passage: updatedPassage,
        clusterId: atom.clusterId || null
      });

      currentExamNumber++;
    }
  }

  const generatedId = `vact-random-${Date.now()}`;
  const examTitle = options.sectionOnly === 'all'
    ? 'ĐỀ THI NGẪU NHIÊN CHUẨN V-ACT (120 CÂU - BẢO TOÀN CỤM NGỮ LIỆU)'
    : `ĐỀ LUYỆN TẬP NGẪU NHIÊN: ${options.sectionOnly.toUpperCase()} (30 CÂU)`;

  return {
    id: generatedId,
    title: examTitle,
    type: 'Đề Ngẫu Nhiên',
    durationMinutes: options.sectionOnly === 'all' ? 150 : 40,
    questions: finalQuestions
  };
}
