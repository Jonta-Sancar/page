var hideInterval;
let board_active = {
    e:null,
    d:null
};
let board_height = 0;

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

            if (height <= board_height) {

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

        let height = board_height;
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

    let displayId = e.getAttribute('href');
    let display = document.querySelector(displayId);

    if(display == board_active.d){
        console.log('igual')

        active.remove(e, display)
        board_active.e = null;
        board_active.d = null;
        console.log(board_active.e, board_active.d)
    }
    else{
        console.log('não igual')

        if(board_active.e != e && board_active.e != null){

            active.remove(board_active.e, board_active.d)

            setTimeout(() => {

                active.add(e, display)
                board_active.e = e;
                board_active.d = display;
            }, 2000);
        }
        else{

            active.add(e, display)
            board_active.e = e;
            board_active.d = display;
            console.log(board_active.e, board_active.d)
        }

    }
}

window.onload = function(){
    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(element => {
        
        board_height = element.clientHeight;
    
        element.style.height = '0px';
        element.style.padding = '0px';
        element.style.display = 'none';
    });

}