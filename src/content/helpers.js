export function getMessagesContainerElement() {
  const messagesContainerSelector = '[class^="react-scroll-to-bottom"]';
  // Find the scrollable container (matches 'react-scroll-to-bottom' class with overflowY auto)
  const messagesContainerElement = Array.from(
    document.querySelectorAll(messagesContainerSelector)
  ).filter((el) => window.getComputedStyle(el).overflowY === "auto")[0];

  return messagesContainerElement;
}

export function getUserMessageElements() {
  const userMessagesSelector = '[data-message-author-role="user"]';
  const userMessageElements = Array.from(
    document.querySelectorAll(userMessagesSelector)
  );

  return userMessageElements;
}

export function getOffsetScroll(containerElement, firstElement) {
  const offsetScroll =
    containerElement.scrollTop + firstElement.getBoundingClientRect().top;

  return offsetScroll;
}

export function getElementIndexToGoTo(location, elements, offsetScroll) {
  let elementIndexToGoTo;

  if (location === "first") {
    elementIndexToGoTo = 0;
  } else if (location === "last") {
    elementIndexToGoTo = elements.length - 1;
  } else {
    elementIndexToGoTo = elements.findIndex((element) => {
      const elementTop = element.getBoundingClientRect().top - offsetScroll;
      if (location === "next") {
        return elementTop > 1;
      } else if (location === "previous") {
        // For previous, find the first element that is less than 0 but closest to 0
        return (
          elementTop < 0 &&
          elementTop ===
            Math.max(
              ...elements
                .map((el) => el.getBoundingClientRect().top - offsetScroll)
                .filter((top) => top < 0)
            )
        );
      } else {
        throw Error;
      }
    });
  }

  return elementIndexToGoTo;
}

export function getTopValueOfElement(containerElement, element, offsetScroll) {
  const topValue =
    containerElement.scrollTop +
    element.getBoundingClientRect().top -
    offsetScroll;

  return topValue;
}

export function getTopPositionsOfElements(elements, offsetScroll) {
  const topPositions = elements.map(
    (element) => element.getBoundingClientRect().top - offsetScroll
  );

  return topPositions;
}
