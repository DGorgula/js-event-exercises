const button = document.getElementsByClassName('remove-button')[0];
const panes = document.getElementsByClassName('pane');
console.log(button.dataset);


for (const singlePane of panes) {
    let clone = button.cloneNode(true);
    singlePane.append(clone);
    
}

button.remove();

document.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.dataset.well !== undefined) {
        e.target.closest('DIV').remove()
    }
});
