const nodes = document.querySelectorAll('.timeline-item');

const tracker = document.querySelector('#tracker-div');


let flag = false;

let timestamp;

let divMoveOnMouseEvent = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if(!flag){
        tracker.classList.add('active');
        flag = true;
    }
    tracker.style.setProperty('left', `${x - 450}px`);
    tracker.style.setProperty('top', `${y - 450}px`);
}

nodes.forEach((node) => {
    node.addEventListener('mousemove', (e) => {
            if(!timestamp){
                timestamp = Date.now();
                divMoveOnMouseEvent(e);
            }
            else if (Date.now() - timestamp >= 10){
                timestamp = Date.now();
                divMoveOnMouseEvent(e);
            }
            else{
                node.onmouseover = divMoveOnMouseEvent(e);
            }
    });
    node.addEventListener('mouseout', () => {
        tracker.classList.remove('active');
        flag = false;
    });
})