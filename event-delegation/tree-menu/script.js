

document.addEventListener('click', (e)=> {
    if (e.target.tagName === 'LI') {
        if(e.target.dataset.hide !== undefined){
            const elementsToHide = document.querySelectorAll('.'+e.target.dataset.hide);
            for (const li of elementsToHide) {
                if(li.hidden === true) {
                    li.hidden = false;
                    continue;
                }
                li.hidden = true;
            }
        }
        
    }
})