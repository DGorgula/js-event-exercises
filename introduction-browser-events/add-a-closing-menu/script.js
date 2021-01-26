const button = document.getElementsByClassName('remove-button')[0];
const panes = document.getElementsByClassName('pane');

for (const singlePane of panes) {
    let clone = button.cloneNode(true);
    clone.addEventListener('click', () => {
        clone.parentElement.remove();
    } )
    singlePane.append(clone);
}

button.remove();

