const list = document.getElementsByTagName('ul');
const parag = document.getElementById('parag');

parag.addEventListener('click',  toggleMenu);
    
function toggleMenu(e) {
    for (let li of list) {
        if(li.hidden === true){
            li.hidden = false;
            changeToggleArrow();
            continue;
        }
        li.hidden = true;
        changeToggleArrow();
        
    }
    
}


function changeToggleArrow() {
    if (parag.innerText[0] === "▼"){
        parag.innerText = "▶ Sweeties (click me)!"
    }
    else {
        parag.innerText = "▼ Sweeties (click me)!"
    }
}