import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile device specifications, viewport dimensions,
 * devicePixelRatio, and orientation for adaptive responsive layout.
 */
export function useDeviceDetection() {
  const getDeviceInfo = () => {
    if (typeof window === 'undefined') {
      return {
        width: 393,
        height: 852,
        screenWidth: 393,
        dpr: 3,
        isSmallMobile: true,
        isLargeMobile: false,
        isTablet: false,
        isDesktop: false,
        orientation: 'portrait',
        deviceCategory: 'small-mobile',
        isTouch: true
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenWidth = window.screen?.width || width;
    const dpr = window.devicePixelRatio || 1;
    const orientation = width > height ? 'landscape' : 'portrait';
    const isTouch = 'ontouchstart' in window || (navigator.maxTouchPoints > 0);

    let deviceCategory = 'desktop';
    let isSmallMobile = false;
    let isLargeMobile = false;
    let isTablet = false;
    let isDesktop = false;

    if (width <= 393) {
      deviceCategory = 'small-mobile';
      isSmallMobile = true;
    } else if (width <= 440) {
      deviceCategory = 'large-mobile';
      isLargeMobile = true;
    } else if (width <= 1024) {
      deviceCategory = 'tablet';
      isTablet = true;
    } else {
      deviceCategory = 'desktop';
      isDesktop = true;
    }

    return {
      width,
      height,
      screenWidth,
      dpr,
      isSmallMobile,
      isLargeMobile,
      isMobile: isSmallMobile || isLargeMobile,
      isTablet,
      isDesktop,
      orientation,
      deviceCategory,
      isTouch
    };
  };

  const [deviceInfo, setDeviceInfo] = useState(getDeviceInfo);

  useEffect(() => {
    const handleResizeOrRotate = () => {
      const updated = getDeviceInfo();
      setDeviceInfo(updated);

      // Reflect on document root for CSS selectors
      const root = document.documentElement;
      root.setAttribute('data-device', updated.deviceCategory);
      root.setAttribute('data-orientation', updated.orientation);
      root.setAttribute('data-dpr', updated.dpr >= 3 ? 'retina-3x' : updated.dpr >= 2 ? 'retina-2x' : 'standard');
    };

    handleResizeOrRotate();

    window.addEventListener('resize', handleResizeOrRotate, { passive: true });
    window.addEventListener('orientationchange', handleResizeOrRotate, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResizeOrRotate);
      window.removeEventListener('orientationchange', handleResizeOrRotate);
    };
  }, []);

  return deviceInfo;
}

export default useDeviceDetection;
