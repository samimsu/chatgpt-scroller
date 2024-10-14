import { log } from "../logger.js";
import {
  getMessagesContainerElement,
  getUserMessageElements,
  getOffsetScroll,
  getElementIndexToGoTo,
  getTopValueOfElement,
  getTopPositionsOfElements,
} from "./helpers.js";

export function scrollTo(location) {
  const messagesContainerElement = getMessagesContainerElement();

  if (!messagesContainerElement) {
    log("No scrollable container found.");
    return;
  }

  const userMessageElements = getUserMessageElements();

  if (!userMessageElements.length) return;

  const firstUserMessageElement = userMessageElements[0];

  const offsetScroll = getOffsetScroll(
    messagesContainerElement,
    firstUserMessageElement
  );
  log("offsetScroll", offsetScroll);

  const messagePositions = getTopPositionsOfElements(
    userMessageElements,
    offsetScroll
  );

  log("messagePositions", messagePositions);

  const messageIndexToScrollTo = getElementIndexToGoTo(
    location,
    userMessageElements,
    offsetScroll
  );

  const messageElementToScrollTo = userMessageElements[messageIndexToScrollTo];

  log("messageIndexToScrollTo", messageIndexToScrollTo);

  if (messageElementToScrollTo) {
    log(
      "Next element found at:",
      messageElementToScrollTo.getBoundingClientRect().top - offsetScroll
    );

    const topValueToScrollTo = getTopValueOfElement(
      messagesContainerElement,
      messageElementToScrollTo,
      offsetScroll
    );

    messagesContainerElement.scroll({
      top: topValueToScrollTo,
      behavior: "smooth",
    });
  } else {
    log("No next element found.");
  }
}
