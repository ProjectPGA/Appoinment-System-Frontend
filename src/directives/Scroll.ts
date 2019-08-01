export const Scroll = {
    inserted(el, binding) {
        let f: any = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
                f = null;
            }
        };
        window.addEventListener('scroll', f);
        window.addEventListener('beforeunload', function() {
            if (f) {
                window.removeEventListener('scroll', f);
                f = null;
            }
        });
    },
};
