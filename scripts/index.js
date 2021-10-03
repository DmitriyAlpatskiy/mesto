const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const aboutProjectLink = document.querySelector('.profile__edit');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_value_name');
let jobInput = formElement.querySelector('.popup__input_value_prof');

let profileInfoTitle = document.querySelector('.profile__title');
let profileInfoSubtitle = document.querySelector('.profile__subtitle');

function addModalWindow() {
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoSubtitle.textContent;
    modalWindow.classList.add('popup_opened');
}

aboutProjectLink.addEventListener('click', addModalWindow);

function removeModalWindow() {
    modalWindow.classList.remove('popup_opened');
}

// обработчик отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault() ;

// // вставил новые значения 
profileInfoTitle.textContent = nameInput.value;
profileInfoSubtitle.textContent = jobInput.value;
modalWindowCloseBtn.addEventListener('click', removeModalWindow);
}

formElement.addEventListener('submit', formSubmitHandler); 

