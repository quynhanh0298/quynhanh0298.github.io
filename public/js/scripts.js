const form = document.querySelector('form');
form.onsubmit = (e) => {
    if (form.checkValidity() === false) {
        //Ngăn ko cho form được gửi đi
        e.preventDefault();
        e.stopPropagation();
    }
    form.classList.add('was-validated');
};
// const pattern = document.querySelector('.pattern');
// let createPattern = () => {
//     for(let i = 1; i <= 104; i++){
//         pattern.insertAdjacentHTML('beforeend','<img src="public/images/pattern.png" alt="">');
//     }           
// }
// createPattern();
// const pattern2 = document.querySelector('.pattern2');
// let createPattern2 = () => {
//     for(let i = 1; i <= 104; i++){
//         pattern2.insertAdjacentHTML('beforeend','<img src="public/images/pattern2.png" alt="">');
//     }           
// }
// createPattern2();
const contactus = document.querySelector('.contactus');
const hidden1 = document.querySelectorAll('.hidden1');
const fa = document.querySelectorAll('.fa');
contactus.onclick = () => {
    hidden1[0].classList.toggle('hidden');
    hidden1[1].classList.toggle('hidden');
    hidden1[2].classList.toggle('hidden');
    fa[0].classList.toggle('fa-angle-down');
    fa[0].classList.toggle('fa-angle-up');
}
const productsbtn = document.querySelector('.productsbtn');
productsbtn.onclick = () => {
    hidden1[3].classList.toggle('hidden');
    hidden1[4].classList.toggle('hidden');
    hidden1[5].classList.toggle('hidden');
    hidden1[6].classList.toggle('hidden');
    hidden1[7].classList.toggle('hidden');
    fa[1].classList.toggle('fa-angle-down');
    fa[1].classList.toggle('fa-angle-up');
}
const information = document.querySelector('.information');
information.onclick = () => {
    hidden1[8].classList.toggle('hidden');
    hidden1[9].classList.toggle('hidden');
    hidden1[10].classList.toggle('hidden');
    hidden1[11].classList.toggle('hidden');
    hidden1[12].classList.toggle('hidden');
    fa[2].classList.toggle('fa-angle-down');
    fa[2].classList.toggle('fa-angle-up');
}
const subcribenow = document.querySelector('.subcribenow');
subcribenow.onclick = () => {
    hidden1[13].classList.toggle('hidden');
    hidden1[14].classList.toggle('hidden');
    fa[3].classList.toggle('fa-angle-down');
    fa[3].classList.toggle('fa-angle-up');
}