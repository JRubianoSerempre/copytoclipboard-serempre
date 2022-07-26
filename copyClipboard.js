/**
* Copy a text in clipboard
* @param {string} buttonSelector - class, Markup Type Tag or ID of button to copy
* @param {string} textToCopySelector - class, Markup Type Tag or ID of text for copy
* @example copytoClipBoard(‘.copyButton’,‘#textToCopy’)
* @returns void
*/
function copytoClipboard(buttonSelector, textToCopySelector) {
    const copyButton = document.querySelector(buttonSelector);
    if (buttonSelector) {
        copyButton === null || copyButton === void 0 ? void 0 : copyButton.addEventListener('click', () => {
            const textToCopy = document.querySelector(textToCopySelector);
            function isIE() {
                const userAgent = navigator.userAgent;
                return /MSIE|Trident/.test(userAgent);
            }
            /* if browser is internet explorer */
            if (isIE()) {
                textToCopy.removeAttribute('disabled');
                textToCopy.select();
                document.execCommand('copy');
                textToCopy.setAttribute('disabled', '');
            }
            else {
                // use innertext for elements no input and value for inputs
                navigator.clipboard.writeText(textToCopy.innerText || textToCopy.value);
            }
        });
    }
}
export default copytoClipboard;
