// window.addEventListener('scroll', function () {
//     let header = document.querySelector('header');
//     let scrollPosition = window.scrollY;
//     let headerHeight = header.offsetHeight;

//     if (scrollPosition > headerHeight) {
//         header.style.backgroundColor = '#010010';
//     } else {
//         header.style.backgroundColor = 'transparent';
//     }
// });






































function myFun() {
    let ppp = document.querySelectorAll('.faq .pp');
    ppp.forEach(pp => {
        pp.style.display = pp.style.display === 'none' ? 'block' : 'none';
    });
}

let hhh = document.querySelectorAll('.faq .hh');
hhh.forEach(hh => {
    hh.addEventListener('click', myFun);
});









function myClick() {
  let ppp$ = document.querySelectorAll('.faq .pp-1');
  ppp$.forEach(pp => {
      pp.style.display = pp.style.display === 'none' ? 'block' : 'none';
  });
}

let hhh$ = document.querySelectorAll('.faq .hh-1');
hhh$.forEach(hh => {
  hh.addEventListener('click', myFun);
});









function on() {
  let pp$ = document.querySelectorAll('.faq .pp-2');
  pp$.forEach(pp => {
      pp.style.display = pp.style.display === 'none' ? 'block' : 'none';
  });
}

let hh$ = document.querySelectorAll('.faq .hh-2');
hh$.forEach(hh => {
  hh.addEventListener('click', myFun);
});






function Fun() {
  let pp = document.querySelectorAll('.faq .pp-3');
  pp.forEach(pp => {
      pp.style.display = pp.style.display === 'none' ? 'block' : 'none';
  });
}

let hh = document.querySelectorAll('.faq .hh-3');
hh.forEach(hh => {
  hh.addEventListener('click', myFun);
});








function my() {
  let p$ = document.querySelectorAll('.faq .pp-4');
  p$.forEach(pp => {
      pp.style.display = pp.style.display === 'none' ? 'block' : 'none';
  });
}

let h$ = document.querySelectorAll('.faq .hh-4');
h$.forEach(hh => {
  hh.addEventListener('click', myFun);
});









function off() {
  let pppp$ = document.querySelectorAll('.faq .pp-5');
  pppp$.forEach(pp => {
      pp.style.display = pp.style.display === 'none' ? 'block' : 'none';
  });
}

let hhhh$ = document.querySelectorAll('.faq .hh-5');
hhhh$.forEach(hh => {
  hh.addEventListener('click',myFun);
});