export const windowEventDirectiveFactory = (eventName: string): any => ({
  inserted(el, binding) {
    let f: any = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener(eventName, f);
        f = null;
      }
    };
    window.addEventListener(eventName, f);
    window.addEventListener('beforeunload', function () {
      if (f) {
        window.removeEventListener(eventName, f);
        f = null;
      }
    });
  },
});
