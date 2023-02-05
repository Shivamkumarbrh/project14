const box1 = document.querySelector('#menuBox1');
const box2 = document.querySelector('#menuBox2');
const box3 = document.querySelector('#menuBox3');

const show1 = () => {
    box1.style.display = 'block';
    box2.style.display = 'none';
    box3.style.display = 'none';
}
const show2 = () => {
    box1.style.display = 'none';
    box2.style.display = 'block';
    box3.style.display = 'none';
}
const show3 = () => {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'block';
}

// init call 
show1()