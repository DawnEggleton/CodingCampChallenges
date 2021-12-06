const tabs = document.querySelectorAll('.tab-content');
const labels = document.querySelectorAll('.tab-label');
tabs[0].classList.add('active');
labels[0].classList.add('active');
labels.forEach((label, i) => {
    label.addEventListener('click', e => {
        [...tabs, ...labels].forEach(el => el.classList.remove('active'));
        e.currentTarget.classList.add('active');
        tabs[i].classList.add('active');
    });
});