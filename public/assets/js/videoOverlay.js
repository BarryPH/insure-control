

// --------------------------------------------------------------------------
// COMPONENT: HERO
// Youtube embed poster frame reveal
// See: http://codepen.io/pixelthing/pen/zGZKaQ
// --------------------------------------------------------------------------

const wrapper = document.getElementsByClassName('js-videoWrapper')[0];
const iframe = document.getElementsByClassName('js-videoIframe')[0];
const videoPoster = document.getElementsByClassName('js-videoPoster')[0];

videoPoster.addEventListener('click', function (event) {
    event.preventDefault();

    videoPlay(wrapper);
});

function videoPlay(wrapper) {
    let src = iframe.getAttribute('data-src');

    wrapper.classList.add('videoWrapperActive');
    iframe.setAttribute('src', src);
}

function videoStop(wrapper) {
    wrapper.removeClass('videoWrapperActive');
    iframe.setAttribute('src', '');
}
