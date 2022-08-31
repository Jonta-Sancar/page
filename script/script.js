var hideInterval;
let board_active = {
    e:null,
    d:null
};
let board_height = 0;
let change_height_time = 3;

const active = {
    remove(e, d, callback) {

        e.classList.remove('active');

        displayControl.hide(d, callback);

    },
    add(e, d) {

        e.classList.add('active');

        d.style.display = 'flex';

        displayControl.show(d);

        board_height = d.dataset.size;
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
                height+=change_height_time;
            }
            else {

                clearInterval(hideInterval);
            }
            if (padding <= 10) {

                d.style.padding = padding + 'px';
                padding+=change_height_time;
            }
        }, 0.1)
    },
    hide(d, callback) {
        clearInterval(hideInterval);

        let height = board_height;
        let padding = 10;

        hideInterval = setInterval(() => {

            if (height >= 0) {

                d.style.height = height + 'px';
                height-=change_height_time;
            }
            else {

                d.style.display = 'none';
                clearInterval(hideInterval);

                if (callback) {
                    callback();
                }
            }
            if (padding >= 0) {

                d.style.padding = padding + 'px';
                padding-=change_height_time;
            }
        }, 0.1)
    }
}

function toActive(e) {

    let displayId = e.getAttribute('href');
    let display = document.querySelector(displayId);

    if(display == board_active.d){

        active.remove(e, display)
        board_active.e = null;
        board_active.d = null;
    }
    else{

        if(board_active.e != e && board_active.e != null){

            active.remove(board_active.e, board_active.d, ()=>{

                active.add(e, display)
                board_active.e = e;
                board_active.d = display;
            });
        }
        else{

            active.add(e, display)
            board_active.e = e;
            board_active.d = display;
        }

    }
}

window.onload = function(){
    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(element => {
        element.dataset.size = element.clientHeight;
    
        element.style.height = '0px';
        element.style.padding = '0px';
        element.style.display = 'none';
    });

}