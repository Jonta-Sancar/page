var hideInterval;
let boardSkills_height = 0;

const active = {
    remove(e, d) {

        e.classList.remove('active');

        displayControl.hide(d);
    },
    add(e, d) {

        e.classList.add('active');

        d.style.display = 'flex';

        displayControl.show(d);
    }
}
const displayControl = {
    show(d) {
        clearInterval(hideInterval);

        let height = 0;
        let padding = 0;

        hideInterval = setInterval(() => {

            if (height <= boardSkills_height) {

                d.style.height = height + 'px';
                height++;
            }
            else {

                clearInterval(hideInterval);
            }
            if (padding <= 10) {

                d.style.padding = padding + 'px';
                padding++;
            }
        }, 0.1)
    },
    hide(d) {
        clearInterval(hideInterval);

        let height = boardSkills_height;
        let padding = 10;

        hideInterval = setInterval(() => {

            if (height >= 0) {

                d.style.height = height + 'px';
                height--;
            }
            else {

                d.style.display = 'none';
                clearInterval(hideInterval);
            }
            if (padding >= 0) {

                d.style.padding = padding + 'px';
                padding--;
            }
        }, 0.1)
    }
}

function toActive(e) {

    let beActive = e.classList[1];

    let displayId = e.getAttribute('href');
    let display = document.querySelector(displayId);

    if (beActive) {

        active.remove(e, display)
    }
    else {

        active.add(e, display)
    }
}

function removeDropdown(){
    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(element => {
        
        board_height = element.clientHeight;
    
        element.style.display = 'none';
    });

}
removeDropdown();