document.querySelectorAll('.class-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.querySelector('.description').style.display = 'block';
    });
    box.addEventListener('mouseout', () => {
        box.querySelector('.description').style.display = 'none';
    });
});

document.querySelectorAll('.class-box').forEach(box => {
    let description = box.querySelector('.description');
    box.addEventListener('mouseover', () => {
        description.style.maxHeight = description.scrollHeight + 'px';
    });
    box.addEventListener('mouseout', () => {
        description.style.maxHeight = '0';
    });
});

document.querySelectorAll('.class-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.querySelector('.description').style.display = 'block';
    });
    box.addEventListener('mouseout', () => {
        box.querySelector('.description').style.display = 'none';
    });
});
