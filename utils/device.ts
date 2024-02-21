export function isMobileDevice() {
  const userAgent = typeof window.navigator === "undefined" ? "" : window.navigator.userAgent;
  const mobileKeywords = ["Android", "iPhone", "iPad", "iPod", "BlackBerry", "Windows Phone"];

  return mobileKeywords.some((keyword) => userAgent.includes(keyword));
}
