window.onload = function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
    });
};
