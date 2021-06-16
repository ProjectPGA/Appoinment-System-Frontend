/* See https://vuejs.org/v2/guide/custom-directive.html */
export const Autofocus: any = {
  inserted(el) {
    el.focus();
  },
};
