function makeSmile() {
    const mouth = document.querySelector('.mouth');
    const leftEye = document.querySelector('.eye.left');
    const rightEye = document.querySelector('.eye.right');

    mouth.style.width = '60px';
    mouth.style.height = '20px';
    mouth.style.borderRadius = '0 0 30px 30px';
    mouth.style.background = '#3b2e2a';
    mouth.style.top = '100px';

    leftEye.style.width = '20px';
    leftEye.style.height = '20px';
    leftEye.style.borderRadius = '50%';
    leftEye.style.top = '40px';

    rightEye.style.width = '20px';
    rightEye.style.height = '20px';
    rightEye.style.borderRadius = '50%';
    rightEye.style.top = '40px';
}

function makeAngry() {
    const mouth = document.querySelector('.mouth');
    const leftEye = document.querySelector('.eye.left');
    const rightEye = document.querySelector('.eye.right');

    mouth.style.width = '60px';
    mouth.style.height = '20px';
    mouth.style.borderRadius = '30px 30px 0 0';
    mouth.style.background = '#3b2e2a';
    mouth.style.top = '100px';

    leftEye.style.width = '20px';
    leftEye.style.height = '10px';
    leftEye.style.borderRadius = '0';
    leftEye.style.top = '40px';
    leftEye.style.transform = 'rotate(45deg)';

    rightEye.style.width = '20px';
    rightEye.style.height = '10px';
    rightEye.style.borderRadius = '0';
    rightEye.style.top = '40px';
    rightEye.style.transform = 'rotate(-45deg)';
}

function makeSad() {
    const mouth = document.querySelector('.mouth');
    const leftEye = document.querySelector('.eye.left');
    const rightEye = document.querySelector('.eye.right');

    mouth.style.width = '60px';
    mouth.style.height = '20px';
    mouth.style.borderRadius = '30px 30px 0 0';
    mouth.style.background = '#3b2e2a';
    mouth.style.top = '120px';

    leftEye.style.width = '20px';
    leftEye.style.height = '10px';
    leftEye.style.borderRadius = '0';
    leftEye.style.top = '50px';
    leftEye.style.transform = 'rotate(-45deg)';

    rightEye.style.width = '20px';
    rightEye.style.height = '10px';
    rightEye.style.borderRadius = '0';
    rightEye.style.top = '50px';
    rightEye.style.transform = 'rotate(45deg)';
}

function makeNeutral() {
    const mouth = document.querySelector('.mouth');
    const leftEye = document.querySelector('.eye.left');
    const rightEye = document.querySelector('.eye.right');

    mouth.style.width = '30px';
    mouth.style.height = '10px';
    mouth.style.borderRadius = '50%';
    mouth.style.background = '#3b2e2a';
    mouth.style.top = '110px';

    leftEye.style.width = '20px';
    leftEye.style.height = '20px';
    leftEye.style.borderRadius = '50%';
    leftEye.style.top = '40px';
    leftEye.style.transform = 'rotate(0deg)';

    rightEye.style.width = '20px';
    rightEye.style.height = '20px';
    rightEye.style.borderRadius = '50%';
    rightEye.style.top = '40px';
    rightEye.style.transform = 'rotate(0deg)';
}
