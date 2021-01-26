const bigImage = document.getElementById("largeImg");
const thumbsList = document.querySelectorAll('a');


document.addEventListener('click', (e) => {
    if (e.target.tagName === "A" || e.target.closest('A')) {
        e.preventDefault();
        const newSrc = e.target.attributes.src.value;
        bigImage.attributes.src.value = newSrc;
    }
})