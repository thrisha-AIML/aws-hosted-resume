window.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    setTimeout(() => {
        if (counterElement) {
            counterElement.innerText = "1 (Local Test)";
        }
    }, 500);
});
