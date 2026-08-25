// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  return /^chatbot\b/i.test(command)
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const emojiPattern = new RegExp("emoji\\d+", "g");
  return message.replace(emojiPattern, "");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(phoneNumber) {
  const phonePattern = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;

  if (phonePattern.test(phoneNumber)) {
    return "Thanks! You can now download me to your phone.";
  }

  return `Oops, it seems like I can't reach out to ${phoneNumber}`;
}
/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(text) {
  const urlPattern = /\b\w+(?:\.\w+)+\b/g;
  return text.match(urlPattern) || [];
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const swapped = fullName.replace(/(\w+),\s*(\w+)/, '$2 $1');
  return `Nice to meet you, ${swapped}`;
}
