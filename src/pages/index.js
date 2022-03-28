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

const popupProfileFormValidator = new FormValidator(validationConfig, formElementProfile);
const popuoAddPicFormValidator = new FormValidator(validationConfig, formElementImg);

popupProfileFormValidator.enableValidation();
popuoAddPicFormValidator.enableValidation();

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
  copyFormEditProfile();
  popupProfileFormValidator.resetValidation();
  popupEdit.open();
});

cardAdd.addEventListener('click', function () {
  popuoAddPicFormValidator.resetValidation();
  popupAdd.open();
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
