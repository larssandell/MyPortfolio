let loader = document.querySelector(".loader");

window.setTimeout(() => {
    loader.parentElement.removeChild(loader);
}, 2000);
