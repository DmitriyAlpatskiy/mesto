import { initialCards } from './InitialCards.js';
import {Card} from './Card.js'
import { FormValidator } from './FormValidator1.js';

//нахожу popupProfile
const popupProfile = document.querySelector('.popup_profile');
//закрытие
const popupProfileClose = popupProfile.querySelector('.popup__close');
//форма
const formElementProfile = popupProfile.querySelector('.popup__form');
//инпут имени
const nameInputProfile = formElementProfile.querySelector('.popup__input_value_profile-name');
//инпут профессии 
const jobInputProfile = formElementProfile.querySelector('.popup__input_value_profile-prof');

// для popup-img (карточки)
// нахожу popup_img
const popupImg = document.querySelector('.popup_img');
//закрытие 
const popupImgClose = popupImg.querySelector('.popup__close');
//форма
const formElementImg = popupImg.querySelector('.popup__form');
//инпут название карточки
const nameInputImg = formElementImg.querySelector('.popup__input_value_card-name');
//инпут ссылка на изображение
const linkInputImg = formElementImg.querySelector('.popup__input_value_card-link');


// для popup-photo (фото)
const popupPhoto = document.querySelector('.popup_photo');
const popupPhotoClose = popupPhoto.querySelector('.popup__close');
const popupPhotoImg = popupPhoto.querySelector('.popup__photo-img');
const popupPhotoTitle = popupPhoto.querySelector('.popup__photo-title');

//кнопка редактирования
const profileEdit = document.querySelector('.profile__edit');
const profileInfoTitle = document.querySelector('.profile__title');
const profileInfoSubtitle = document.querySelector('.profile__subtitle');
// кнопка редактирования
const cardAdd = document.querySelector('.profile__add');
const cardContainer = document.querySelector('.cards')
const cardTemplateSelector = '#card-template'; 
const cardTemplate = document.querySelector('#card-template').content;
const closeButtons = document.querySelectorAll('.popup__close'); 

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

const editFormValidator = new FormValidator(validationConfig, formElementProfile);
const addCardFormValidator = new FormValidator(validationConfig, formElementImg);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();



const renderCard = (data) => {
  const card = new Card(data, cardTemplateSelector);
  const cardElement = card.generateCard()
  cardContainer.prepend(cardElement);
  };


function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const fileOpen = document.querySelector('.popup_opened');
    closePopup(fileOpen);
  }
};

function closePopupOverley(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
  popup.addEventListener('click', closePopupOverley);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
  popup.removeEventListener('click', closePopupOverley);
};


//копируем значения в value
function copyFormEditProfile() { 
  nameInputProfile.value = profileInfoTitle.textContent;
  jobInputProfile.value = profileInfoSubtitle.textContent;
};

// обработчик отправки формы
function submitProfileForm (evt) {
  evt.preventDefault() ;  

//вставил новые значения 
profileInfoTitle.textContent = nameInputProfile.value;
profileInfoSubtitle.textContent = jobInputProfile.value;
closePopup(popupProfile);
};

formElementProfile.addEventListener('submit', submitProfileForm);

const submitCardButton = formElementImg.querySelector('.popup__save');

function turnOffSubmit(submitCardButton) {
  submitCardButton.classList.add('popup__save_disabled');
  submitCardButton.setAttribute('disabled', '');
};


const addNewCard = (event) => {
  event.preventDefault();
  const newCard = {};
  newCard.name = nameInputImg .value;
  newCard.link = linkInputImg.value;
  renderCard(newCard);
  
  closePopup(popupImg);
  event.target.reset()
  turnOffSubmit(submitCardButton);
};

formElementImg.addEventListener('submit', addNewCard);

profileEdit.addEventListener('click', function () {
  openPopup(popupProfile);
  copyFormEditProfile();
});

cardAdd.addEventListener('click', function () {
  openPopup(popupImg);
});


closeButtons.forEach(element => { 
  element.addEventListener('click', function (event) { 
    closePopup(event.target.closest('.popup')) });
})


initialCards.forEach(renderCard);


