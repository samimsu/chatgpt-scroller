const isDevelopment = !("update_url" in chrome.runtime.getManifest()); // If 'update_url' exists, it's a production extension

export function log(...args) {
  if (isDevelopment) {
    console.log(...args);
  }
}

export function warn(...args) {
  if (isDevelopment) {
    console.warn(...args);
  }
}

export function error(...args) {
  console.error(...args); // Always log errors regardless of environment
}
