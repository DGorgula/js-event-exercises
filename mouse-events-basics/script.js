document.body.addEventListener('click', (e) => {

    if(e.target.tagName === 'LI'){
        const lis = document.getElementsByTagName('li');
        if (e.metaKey || e.ctrlKey) {
            e.target.classList.add('selected');
            return;
        }
        
        for (const li of lis) {
            li.classList.remove('selected');
        }
        
        e.target.classList.add('selected');
    }

})