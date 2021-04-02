// data sa kojom radim
const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

// varijable

let index = 0;
let score = 0;

const quizzTitle = document.querySelector('.quizz__title');
const quizzForm = document.querySelector('.quizz__form');
const quizzCard = document.querySelector('.quizz__card');
const btnSubmit = document.querySelector('.btn-submit');
let input = quizzForm.querySelectorAll('input');

// event listener
window.addEventListener('DOMContentLoaded', populateQuizz);
btnSubmit.addEventListener('click', increaseIndex);

// popuniti rubriku sa podacima

function populateQuizz() {
  quizzTitle.innerHTML = quizData[index].question;

  quizzForm.children[0].children[1].innerHTML = quizData[index].a;
  quizzForm.children[1].children[1].innerHTML = quizData[index].b;
  quizzForm.children[2].children[1].innerHTML = quizData[index].c;
  quizzForm.children[3].children[1].innerHTML = quizData[index].d;
}

// povecati index i prikazati konacnu stranu
function increaseIndex() {
  let res = selectedAnswer();
  quizzTitle.innerHTML = '';

  if (res === quizData[index].correct) {
    score++;
  }

  index++;
  console.log(index);

  if (index === quizData.length) {
    index = 0;

    quizzCard.innerHTML = `<div class='result__content'>
    <h5>Ukupno tacnih odgovora: ${score} / 
    ${quizData.length}</h5>
    <button class="btn-submit reload">Reload</button>
    </div>`;

    let btnReload = document.querySelector('.reload');

    btnReload.addEventListener('click', reloadPage);
  }

  deselectCheckboox();
  populateQuizz();
}

// utvrditi sta je selektovano

function selectedAnswer() {
  let answer;

  input.forEach((item) => {
    if (item.checked) {
      answer = item.id;
    }
  });

  return answer;
}

// selektovane odgovore anulirati

function deselectCheckboox() {
  input.forEach((item) => {
    item.checked = false;
  });
}

// Na kraju reload page i pocni kviz ispocetka

function reloadPage() {
  window.location.reload();
}
