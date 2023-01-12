function addingEventListener() {
    const input = document.querySelector('input#button')
    function clickAlert() {
        alert('I was clicked!');
    }
    input.addEventListener('click', clickAlert);
}
