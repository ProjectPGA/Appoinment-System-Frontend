/* See https://vuejs.org/v2/guide/custom-directive.html */
export const Autofocus = {
    inserted(el) {
        el.focus();
    },
};
