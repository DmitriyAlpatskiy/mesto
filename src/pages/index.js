import './../pages/index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, formElementProfile, nameInputProfile, jobInputProfile, popupImg,  formElementImg, popupPhoto, popupImgSelector, popupProfileSelector, profileEdit, cardAdd, cardContainer, cardTemplateSelector, validationConfig} from '../utils/constants.js';


const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
});

const editFormValidator = new FormValidator(validationConfig, formElementProfile);
const addCardFormValidator = new FormValidator(validationConfig, formElementImg);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardElement = createCard(data);
    cardList.addItem(cardElement);
  }}, cardContainer)

  cardList.renderItems();

//***************************** */
const popupAdd = new PopupWithForm ({
  popupSelector: popupImgSelector,
  handleFormSubmit: (data) => {
    const cardElement = createCard(data);
    cardList.addItem(cardElement);
    popupAdd.close();
  }
});

popupAdd.setEventListener();

const popupEdit = new PopupWithForm({
  popupSelector: popupProfileSelector,
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);
    popupEdit.close();
  }});

popupEdit.setEventListener();
//********************************** */

const popupWithImage = new PopupWithImage (popupPhoto)
popupWithImage.setEventListener();



function copyFormEditProfile() { 
  const { name, job} = userInfo.getUserInfo();
  nameInputProfile.value = name;
  jobInputProfile.value = job;
};


profileEdit.addEventListener('click', function () {
  popupEdit.open();
  copyFormEditProfile();
  editFormValidator.resetValidation();
});

cardAdd.addEventListener('click', function () {
  popupAdd.open();
  addCardFormValidator.resetValidation();
});

function createCard(item) {
  const card = new Card(
    item, 
    cardTemplateSelector, 
    (name, link) => {
      popupWithImage.open(name, link);
    });
    
  const cardElement = card.generateCard()
return cardElement
}

// // обработчик отправки формы
// function submitProfileForm (evt) {
//   evt.preventDefault() ;  

// //вставил новые значения 
// profileInfoTitle.textContent = nameInputProfile.value;
// profileInfoSubtitle.textContent = jobInputProfile.value;
// closePopup(popupProfile);
// };

// formElementProfile.addEventListener('submit', submitProfileForm);


// const addNewCard = (event) => {
//   event.preventDefault();
//   const newCard = {};
//   newCard.name = nameInputImg.value;
//   newCard.link = linkInputImg.value;
//   renderCard(newCard);
  
//   closePopup(popupImg);
//   event.target.reset();
// };

// formElementImg.addEventListener('submit', addNewCard);




// closeButtons.forEach(element => { 
//   element.addEventListener('click', function (event) { 
//     closePopup(event.target.closest('.popup')) });
// })









// function createCard(item) {
//   const card = new Card(
//     item, 
//     cardTemplateSelector, 
//     handleCardClick);
    
//   const cardElement = card.generateCard()
// return cardElement
// }

// function handleCardClick (name, link) {
//   popupPhotoTitle.textContent = name;
//   popupPhotoImg.alt = name;
//   popupPhotoImg.src = link;
//   openPopup(popupPhoto);
// };

// function renderCard(data) {
//   const cardElement = createCard(data);
//   cardContainer.prepend(cardElement);
// };