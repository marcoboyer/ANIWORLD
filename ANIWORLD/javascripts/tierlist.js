//Bereich der bewegbaren Elemente und an welchem Ort es abgelegt werden soll
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
    //Event erstellen für das greifen des Elements
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })

    //Event erstellen für das loslassen des Elements
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        //damit nur innerhalb des Bereichs angezeigt wird das man Element platzieren kann
        e.preventDefault();

        //Zuweisung dass Element gezogen wird und dem Container angehängt wird
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    })
})