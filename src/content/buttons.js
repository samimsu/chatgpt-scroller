import { log } from "../logger.js";
import { scrollTo } from "./scrolling.js";

const iconSize = "24";

// SVG for the 'Up' button
const upSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width=${iconSize} height=${iconSize} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up" viewBox="0 0 24 24">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
`;

// SVG for the 'Down' button
const downSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width=${iconSize} height=${iconSize} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down" viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
`;

// SVG for the 'First' button (scroll to first message)
const firstSVG = `
 <svg width=${iconSize} height=${iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.0083 14.1005V42" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 26L24 14L36 26" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 6H36" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

// SVG for the 'Last' button (scroll to last message)
const lastSVG = `
  <svg width=${iconSize} height=${iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
    <path d="M24.0083 33.8995V6" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M36 22L24 34L12 22" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M36 42H12" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export function createButtons() {
  // Create a container for the buttons
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "50%"; // Center vertically
  overlay.style.right = "1.75rem"; // Stick to the right side
  overlay.style.transform = "translateY(-50%)"; // Adjust position to truly center
  overlay.style.zIndex = "9999"; // Ensure it is on top of other elements
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";

  // Create the 'Up' button
  const upButton = document.createElement("button");
  upButton.innerHTML = upSVG;
  upButton.title = "Previous message";
  upButton.classList.add("nav-button");

  // Create the 'Down' button
  const downButton = document.createElement("button");
  downButton.innerHTML = downSVG;
  downButton.title = "Next message";
  downButton.classList.add("nav-button");

  // Create 'First' button for first message
  const firstButton = document.createElement("button");
  firstButton.innerHTML = firstSVG;
  firstButton.title = "First message";
  firstButton.classList.add("nav-button");

  // Create 'Last' button for last message
  const lastButton = document.createElement("button");
  lastButton.innerHTML = lastSVG;
  lastButton.title = "Last message";
  lastButton.classList.add("nav-button");

  // Append buttons to the overlay
  overlay.appendChild(firstButton);
  overlay.appendChild(upButton);
  overlay.appendChild(downButton);
  overlay.appendChild(lastButton);

  // Append the overlay to the body
  document.body.appendChild(overlay);

  // Scroll behavior for 'Previous Message' button
  upButton.addEventListener("click", () => {
    log("Previous button clicked"); // Log button click
    scrollTo("previous");
  });

  // Scroll behavior for 'Next Message' button
  downButton.addEventListener("click", () => {
    log("Next button clicked"); // Log button click
    scrollTo("next");
  });

  // Scroll behavior for 'First Message' button
  firstButton.addEventListener("click", () => {
    scrollTo("first");
  });

  // Scroll behavior for 'Last Message' button
  lastButton.addEventListener("click", () => {
    scrollTo("last");
  });
}
