(function() {
    var num = 1;
    var d_list = document.getElementById('depart_list');
    var prev = document.getElementById('depart_prev');
    var next = document.getElementById('depart_next');
    var container = document.getElementById('depart_hidden') || d_list.parentElement;
    var slides = d_list.getElementsByClassName('depart_slide');
    var containerWidth = container.clientWidth;

    function setWidths() {
        containerWidth = container.clientWidth;
        d_list.style.width = (slides.length * containerWidth) + 'px';
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.width = containerWidth + 'px';
            slides[i].style.float = 'left';
        }
        d_list.style.left = - (num - 1) * containerWidth + 'px';
    }

    function go(n) {
        num = n;
        if (num < 1) num = slides.length;
        if (num > slides.length) num = 1;
        d_list.style.left = - (num - 1) * containerWidth + 'px';
    }

    next.onclick = function() {
        num += 1;
        if (num > slides.length) {
            num = 1;
        }
        go(num);
    };

    prev.onclick = function() {
        num -= 1;
        if (num < 1) {
            num = slides.length;
        }
        go(num);
    };

    window.addEventListener('resize', function() {
        setWidths();
    });

    // init
    setWidths();
})();