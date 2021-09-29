const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const aboutProjectlink = document.querySelector('.profile__edit');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup__is-opened');
}

aboutProjectlink.addEventListener('click', toggleModalWindow);
modalWindowCloseBtn.addEventListener('click', toggleModalWindow);


// нашел формц в DOM
let formElement = document.querySelector('.popup');
// нашел поля формы в DOM
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__prof');

// обработчик отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault() ;

// присвоил значение полей 
let nameImputValue = nameInput.value;
let jobInputValue = jobInput.value;

// выбрал эл-ты, куда буду вставлять значения полей 
let ProfileInfoTitle = document.querySelector('.profile__title');
let ProfileInfoSubtitle = document.querySelector('.profile__subtitle');

// вставил новые значения 
ProfileInfoTitle.textContent = nameImputValue;
ProfileInfoSubtitle.textContent = jobInputValue;

}

formElement.addEventListener('submit', formSubmitHandler); 

