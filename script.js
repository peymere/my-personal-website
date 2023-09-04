//const h2 = document.createElement("h2");
//h2.textContent = "This is my first website!";

//document.querySelector("body").appendChild(h2);

//document.addEventListener('DOMContentLoaded', () => {
    //const images = document.getElementById('images');
    
    //const firstBookClone = images.children[0].cloneNode(true);
    //const lastBookClone = images.children[images.children.length - 1].cloneNode(true);

    //images.appendChild(firstBookClone);
    //images.insertBefore(lastBookClone, images.children[0]);

    //images.style.transitionDuration = "0.0s"
    //images.style.transform = `translate(-350px)`
//});

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const images = document.getElementById("images");

const firstBookClone = images.children[0].cloneNode(true);
const lastBookClone = images.children[images.children.length - 1].cloneNode(true);

images.insertBefore(lastBookClone, images.children[0]);
images.appendChild(firstBookClone);

images.style.transitionDuration = '0s';
images.style.transform = 'translate(-350px)';

let currentBook = 1;

//next button
next.addEventListener('click', () => {
    if (currentBook < images.children.length - 1) {
        currentBook += 1;

        images.style.transitionDuration = '0.5s';
        images.style.transform = `translate(-${currentBook * 350}px)`;

        if (currentBook === images.children.length - 1) {
            setTimeout(() => {
                images.style.transitionDuration = '0s';
                images.style.transform = 'translate(-350px)';
                currentBook = 1;
            }, 700)
        }
    } else {
        return;
    }
})

//prev button
prev.addEventListener('click', () => {
    if (currentBook > 0) {
        currentBook -= 1;
        images.style.transitionDuration = '0.5s';
        images.style.transform = `translate(-${currentBook * 350}px)`;

        if (currentBook === 0) {
            setTimeout(() => {
                images.style.transitionDuration = '0s';
                images.style.transform = `translate(-${(images.children.length - 2) * 350}px)`;
                currentBook = images.children.length - 2;
            }, 700)
        }
    } else {
        return;
    }
})