let ball = document.getElementById("ball");
const field = document.getElementById("field");

ball.style.position = "absolute";
// ball.style.Left = 100+'px';
// ball.style.Top = 160+'px';


field.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const fieldH = field.getBoundingClientRect().height;
    const fieldL = field.getBoundingClientRect().left;
    const ballHeight = ball.height;
    const ballWidth = ball.width;
    
    const left = x - fieldL - ballWidth/2;
    const bottom = fieldH - y + ballHeight/2;

    ball.style.left = left + 'px';
    ball.style.bottom = bottom + 'px';
})










// field.style.position="relative";
// ball.style.transition = '1s all';