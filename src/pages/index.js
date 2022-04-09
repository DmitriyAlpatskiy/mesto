import './../pages/index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { formElementProfile, nameInputProfile, jobInputProfile, popupImg,  formElementImg, popupPhoto, popupImgSelector, popupProfileSelector, profileEdit, cardAdd, cardContainer, cardTemplateSelector, validationConfig, formEditAvatar, avatarImage, popupEditAvatarSelector, popupConfirmationSelector} from '../utils/constants.js';
import Api from '../components/Api.js'
import PopupDeleteCard from '../components/PopupDeleteCard';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: 'fedb81b4-8c5d-4f38-8770-57e9d7b6ccc2',
    'Content-Type': 'application/json'
  }
});


const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar',
  avatarContainerSelector: '.profile__avatar-overlay',
});

const popupProfileFormValidator = new FormValidator(validationConfig, formElementProfile);
const popuoAddPicFormValidator = new FormValidator(validationConfig, formElementImg);
const popupAvatarValidator = new FormValidator(validationConfig, formEditAvatar)

popupProfileFormValidator.enableValidation();
popuoAddPicFormValidator.enableValidation();
popupAvatarValidator.enableValidation();

const cardsList = new Section({
  renderer: (cardContent) => {
    return createCardElement(cardContent);
  }, 
  containerSelector: cardContainer
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData);
    cardsList.renderCards(cardsData);
  })
  .catch((err) => {
    console.log(err);
})


const popupAdd = new PopupWithForm ({
  popupSelector: popupImgSelector,
  handleFormSubmit: (cardContent) => {
    api.addCard(cardContent)
    .then(cardContent => {
      cardsList.renderCard(cardContent);
      popupAdd.close();
    })
    .finally(() => {
      popupAdd.toggleRenderLoading('Создать');
  })
  .catch((err) => {
    console.log(err);
})
}});

popupAdd.setEventListener();

const popupEdit = new PopupWithForm({
  popupSelector: popupProfileSelector,
  handleFormSubmit: (userData) => {

    api.editUserInfo(userData)
    .then(userInfoDetails => {
      userInfo.setUserInfo(userInfoDetails);
      popupEdit.close();
    })
    .finally(() => {
      popupEdit.toggleRenderLoading();
    })
    .catch((err) => {
      console.log(err);
  })
  }});

popupEdit.setEventListener();

// аватар
const popupEditAvatar = new PopupWithForm({
  popupSelector: popupEditAvatarSelector,
  handleFormSubmit: (avatarLink) => {
    api.editUserAvatar(avatarLink)
    .then(userData => {
      userInfo.setUserInfo(userData);
      popupEditAvatar.close();
    })
    .finally(() => {
      popupEditAvatar.toggleRenderLoading()
    })
    .catch((err) => {
      console.log(err);
  })
  }});

  popupEditAvatar.setEventListener();

  const popupWithImage = new PopupWithImage(popupPhoto);
  popupWithImage.setEventListener();

const popupDeleteCardConfirmation = new PopupDeleteCard({
  popupSelector: popupConfirmationSelector,
  handleConfiramation: (cardId) => {
  api.deleteCard(cardId)
      .then(() => {
        document.getElementById(cardId).remove();
        popupDeleteCardConfirmation.close();
      })
      .finally(() => {
        popupDeleteCardConfirmation.toggleRenderLoading();
      })
      .catch((err) => {
        console.log(err);
    })
}});

popupDeleteCardConfirmation.setEventListener();



function copyFormEditProfile() { 
  const {name, about} = userInfo.getUserInfo();
  nameInputProfile.value = name;
  jobInputProfile.value = about;
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

avatarImage.addEventListener('click', function () {
  popupAvatarValidator.resetValidation();
  popupEditAvatar.open();
})


function createCardElement(cardContent) {
  const card = new Card({
    cardContent: cardContent, 
    templateSelector: cardTemplateSelector, 
    userId: userInfo.getUserId(),
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteClick: (cardId) => {
      popupDeleteCardConfirmation.open();
      popupDeleteCardConfirmation.setCardId(cardId);
    },
    handleLikeClick: (cardId, isLiked) => {
      if (isLiked) {
        api.removeCardLike(cardId)
          .then(cardContent => {
            card.updateLikes(cardContent.likes)
          })
          .catch((err) => {
            console.log(err);
        });
      } else {
        api.addCardLike(cardId)
          .then(cardContent => {
            card.updateLikes(cardContent.likes)
      })
      .catch((err) => {
        console.log(err);
    });
    }
  }});
    
  const cardElement = card.generateCard()
return cardElement
}
