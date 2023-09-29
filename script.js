const draggables = document.querySelectorAll('.image');
// console.log(draggables);

    draggables.forEach((draggable) => {

            draggable.addEventListener("dragstart", (event) => {
                event.dataTransfer.setData("id", draggable.id);
            });

            draggable.addEventListener("dragover", (event) => {
                event.preventDefault();
            });

            draggable.addEventListener('drop', (event) => {
                const droppedElementId = event.dataTransfer.getData("id");
                const element1 = document.getElementById(droppedElementId);
                const element2 = event.target;

                // Swap the IDs
                const temp = element1.id;
                element1.id = element2.id;
                element2.id = temp;
            });
    });