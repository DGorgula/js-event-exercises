const contents = document.getElementById('contents');


contents.addEventListener('click', (e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName === 'A' || e.target.closest('A')) {
        console.log("sfdgk");
        e.preventDefault();
    }
});
