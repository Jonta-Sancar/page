const header = document.querySelector('header');
const headerClass = header.classList;
let prev = 0;
addEventListener('scroll', () => {

  if (scrollY >= prev) {
    if (!headerClass.contains('headerHide')) {
      headerClass.add('headerHide');
      header.style.top = '-100px';
    }
  }
  else if (headerClass.contains('headerHide')) {
    headerClass.remove('headerHide');
    header.style.top = `0px`;
  }
  prev = scrollY;
})

function toActive(e) {

    const active_element = document.querySelector('#nav-ul .active');

    if (e.href != active_element.href) {
        
        active_element.classList.remove('active');
        e.classList.add('active');
    }

    const burger = document.querySelector('#burger-active');

    if(burger){

        toggleMenu(burger);
    }
}

function toggleMenu(e) {
    const id = e.id;

    const nav_ul = document.querySelector('#nav-ul');

    if (id == 'burger') {
        e.id = 'burger-active';
        nav_ul.style.display = 'flex';
    }
    else {
        e.id = 'burger';
        nav_ul.style.display = 'none';
    }
}

function redirect(e){
  const lang = e.value;

  const location = decodeURI(window.location.href);
  const length = location.length;
  const start_index = length - 3;
  const new_location = location.slice(0, start_index)+ '/' + lang;
  
  window.location.replace(new_location);
}