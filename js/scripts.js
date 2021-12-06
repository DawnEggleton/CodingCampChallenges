const tabs = document.querySelectorAll('.tab-content');
const labels = document.querySelectorAll('button.tab-label');
tabs[0].classList.add('active');
labels[0].classList.add('active');
labels[0].setAttribute('disabled', true);
labels.forEach((label, i) => {
    label.addEventListener('click', e => {
        [...tabs, ...labels].forEach(el => el.classList.remove('active'));
        labels.forEach(el => el.removeAttribute('disabled'));
        e.currentTarget.classList.add('active');
        tabs[i].classList.add('active');
        tabs[i].setAttribute('disabled', true);
    });
});