export let name;

function toggleName() {
    if (name === "world") {
        name = "Svelte";
    } else {
        name = "world";
    }
}