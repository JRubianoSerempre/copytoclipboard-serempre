/**
* Copy a text in clipboard
* @param {string} buttonSelector - class, Markup Type Tag or ID of button to copy
* @param {string} textToCopySelector - class, Markup Type Tag or ID of text for copy
* @example copytoClipBoard(‘.copyButton’,‘#textToCopy’)
* @returns void
*/
declare function copytoClipboard(buttonSelector: string, textToCopySelector: string): void;
export default copytoClipboard;
