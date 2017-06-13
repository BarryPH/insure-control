(function() {
    function openTouchNav(event) {
        event.stopPropagation();

        touchNav.classList.add(ACTIVE_CLASS);
        touchNav.addEventListener('click', closeTouchNav);
    }

    function closeTouchNav(event) {
        touchNav.classList.remove(ACTIVE_CLASS);
    }

    const ACTIVE_CLASS = 'is-active';
    const touchNav = document.querySelector('[data-modal]');
    const touchNavTriggers = document.querySelectorAll('[data-modal-toggle]');
    
    Array.prototype.forEach.call(touchNavTriggers, (trigger) => {
        trigger.addEventListener('click', openTouchNav);
    });
})();
