const contents = document.getElementById('contents');


contents.addEventListener('click', (e)=>{
    if(e.target.tagName === 'A' || e.target.closest('A')) {
        e.preventDefault();
    }
});
