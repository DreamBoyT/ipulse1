let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

// let loginForm = document.querySelector('.login-form');
//
// document.querySelector('#login-btn').onclick = () => {
//   loginForm.classList.toggle('active');
//   navbar.classList.remove('active');
// }
//
// window.onscroll = () => {
//   navbar.classList.remove('active');
//   loginForm.classList.remove('active');
// }

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

function sendMessage() {
  emailjs.init("UjbIh_g1fYvKvEz6X");

  var serviceID = "service_8ocb7pq";
  var templateID = "template_h4crtc4";

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    sendercontact: document.querySelector("#phone").value,
    message: document.querySelector("#message").value
  };

  document.querySelector("#contact-form").addEventListener("submit", e => {
    e.preventDefault();

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        alert('Thank you, ' + params['sendername'] + '! Your message has been sent.');
      })
      .catch(err => {
        console.log(err);
      });
  });
}

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.querySelector('.subscription').classList.add('done');
});

document.addEventListener('DOMContentLoaded', function() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwG79-Je3mjIWYeDvCU5TsCp6Ha8X3O27Yk8vQaFjuzeY4ldrwWJUiTODuojzo6_8SKeg/exec';
  const form = document.querySelector('form[name="contact-form"]');

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
        method: 'post',
        body: new FormData(form)
      })
      .then(response => alert("Thank you! Your form is submitted successfully."))
      .then(() => {
        window.location.reload();
      })
      .catch(error => console.error('Error!', error.message));
  });
});

// .....
