/*
============
  REVIEWS
============
*/

// Create my array of objects

const reviews = [
  {
    id: 1,
    name: 'Sara García Gómez',
    title: 'Gestora de cuentas PPC en Esparta Digital',
    img: 'https://media.licdn.com/dms/image/D4D03AQFyudXIuJ6KEQ/profile-displayphoto-shrink_200_200/0/1674671155064?e=1714003200&v=beta&t=gAkAzvig35wtHj6v8s_nPAg1H0dXVDS9gKjLUmlOaPs',
    text: `"He's more than qualified to develop any kind of project from start to finish."`,
  },
  {
    id: 2,
    name: 'Elena Ruiz Morales',
    title: 'SEM & Social Ads Consultant en Digital Menta',
    img: 'https://media.licdn.com/dms/image/C4E03AQFBJZybsYC8Eg/profile-displayphoto-shrink_200_200/0/1625166738273?e=1714003200&v=beta&t=bx_IVuBO01rmmAUs0iYhAKOqwVnDwBo10sncZ2fumaE',
    text: `"He always demonstrates an excellent attitude and professionalism at all times"`,
  },
  {
    id: 3,
    name: 'Cristina Navarro',
    title: 'CEO - Kairos Events',
    img: './assets/img/CN_Foto.png',
    text: `“He's definitely the kind of developer you can trust with a project from start to finish.”`,
  },
];

// selecting each object and assign new values

const img = document.getElementById('img');
const text = document.getElementById('text');
const namePerson = document.getElementById('name-person');
const title = document.getElementById('title');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previus');

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  currentPerson();
});

function currentPerson(person) {
  const item = reviews[currentItem];
  text.textContent = item.text;
  namePerson.textContent = item.name;
  img.src = item.img;
  title.textContent = item.title;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  currentPerson();
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  currentPerson();
});

/*
============
  TOGGLE
============
*/

const toggle = document.querySelector('.bi-list');
const links = document.querySelector('.links');

toggle.addEventListener('click', function () {
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links');
  } else {
    links.classList.add('show-links');
  }
});

/*
=================
  MODAL GALLERY
=================
*/

/*
===============
  BACK TO TOP
===============
*/

const btnTop = document.querySelector('.btn-top');
const docScroll = document.body.scrollTop;

window.addEventListener('scroll', function () {
  if (docScroll > 80 || this.document.documentElement.scrollTop > 80) {
    btnTop.classList.remove('none');
  } else {
    btnTop.classList.add('none');
  }
});

btnTop.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// if (btnTop.classList.contains('none')) {
//   btnTop.classList.remove('none');
// } else {
//   btnTop.classList.add('none');
// }

/*
============
  EMAILJS
============
*/

function sendMail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_28biar9';
  const templateID = 'template_hqc517i';

  emailjs
    .send(serviceID, templateID, params)
    .then(function (res) {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      // alert("Your message sent successfully!");
    })
    .catch((err) => console.log(err));
}
