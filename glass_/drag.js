window.onload = function () {
    const glass = document.querySelector('.glass');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    glass.addEventListener('mousedown', function (e) {
        isDragging = true;

        const rect = glass.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        glass.style.position = 'absolute';
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            glass.style.left = `${e.clientX - offsetX}px`;
            glass.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
};
