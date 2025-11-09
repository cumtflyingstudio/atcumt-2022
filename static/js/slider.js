
/* 知识点：        */
/*       this用法 */
/*       DOM事件 */
/*       定时器 */

window.onload = function silder() {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    // only select direct slide items, avoid counting nested divs (eg. .nm)
    var aSliders = list.getElementsByClassName('slider__item');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var timer;
    var containerWidth = container.clientWidth;

    // set widths based on container (px) to avoid viewport (vw) mismatch
    function setWidths() {
        containerWidth = container.clientWidth;
        list.style.width = (aSliders.length * containerWidth) + 'px';
        for (var i = 0; i < aSliders.length; i++) {
            aSliders[i].style.width = containerWidth + 'px';
            aSliders[i].style.float = 'left';
        }
        // update current left position to match updated width
        list.style.left = - (index - 1) * containerWidth + 'px';
    }

    // go to specific index (1-based)
    function goTo(idx) {
        index = idx;
        list.style.left = - (index - 1) * containerWidth + 'px';
        buttonsShow();
    }

    function play() {
        timer = setInterval(function slider() {
            next.onclick();
        }, 6000);
    }

    function stop() {
        clearInterval(timer);
    }

    function buttonsShow() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].className = '';
        }
        if (buttons[index - 1]) buttons[index - 1].className = 'on';
    }

    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = aSliders.length;
        }
        goTo(index);
        stop();
        play();
    };

    next.onclick = function() {
        index += 1;
        if (index > aSliders.length) {
            index = 1;
        }
        goTo(index);
        stop();
        play();
    };

    for (var i = 0; i < buttons.length; i++) {
        (function(i) {
            buttons[i].onclick = function() {
                var clickIndex = parseInt(this.getAttribute('index'));
                if (!isNaN(clickIndex)) {
                    goTo(clickIndex);
                    stop();
                    play();
                }
            };
        })(i);
    }

    // update sizes on resize
    window.addEventListener('resize', function() {
        setWidths();
    });

    // initial setup
    setWidths();
    container.onmouseover = stop;
    container.onmouseout = play;
    play();
};