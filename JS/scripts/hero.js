const btnDiablo = document.querySelector('.js-modal-diablo');
const btnHeartStone = document.querySelector('.js-modal-heartstone');
const btnWow = document.querySelector('.js-modal-wow');
const modal = document.getElementById('js-modal');

btnDiablo.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7RdDpqCmjb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `
    //Show the modal
    modal.style.display = "flex";
    //Smooth the transition
    setTimeout(() => {
        modal.style.opacity = "1"
    }, 50);
});

btnHeartStone.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/I3gmNWE1Hv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `
    //Show the modal
    modal.style.display = "flex";
    //Smooth the transition
    setTimeout(() => {
        modal.style.opacity = "1"
    }, 50);
});

btnWow.addEventListener('click', () => {
    modal.innerHTML = `
    <div class="modal">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3ZtedjN1JXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `
    //Show the modal
    modal.style.display = "flex";
    //Smooth the transition
    setTimeout(() => {
        modal.style.opacity = "1"
    }, 50);
});

modal.addEventListener('click', () => {
    modal.innerHTML = '';
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 450);
})
