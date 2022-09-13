/* Iteration 4: Make the Everything Work */
const components = ["sky", "ground", "body", "ears", "cheeks"];

function changeColor(id) {
    let elt = document.getElementById(id);
    let color = document.getElementById(`btn-${id}`);
    elt.style.fill = color.value;
}

function clearColor() {
    components.forEach((id) => {
        let elt = document.getElementById(id);
        let color = document.getElementById(`btn-${id}`);
        elt.style.fill = "#ffffff";
        color.value = "#ffffff";
    });
}

function autoColor() {
    components.forEach((id) => {
        let randomColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
        )}`;
        let elt = document.getElementById(id);
        let color = document.getElementById(`btn-${id}`);
        elt.style.fill = randomColor;
        color.value = randomColor;
    });
}
