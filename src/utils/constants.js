
export const initialCards = [
    {
      name: 'Эльбрус, Кабардино-Балкария',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Дагестан',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Домбай',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Адыгея',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Ай-Петри',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Севастополь',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  //нахожу popupProfile
export const popupProfileSelector = '.popup_profile';
export const popupProfile = document.querySelector('.popup_profile');
//закрытие
export const popupProfileClose = popupProfile.querySelector('.popup__close');
//форма
export const formElementProfile = popupProfile.querySelector('.popup__form');
//инпут имени
export const nameInputProfile = formElementProfile.querySelector('.popup__input_value_profile-name');
//инпут профессии 
export const jobInputProfile = formElementProfile.querySelector('.popup__input_value_profile-prof');

// для popup-img (карточки)
// нахожу popup_img
export const popupImgSelector = '.popup_img';
export const popupImg = document.querySelector('.popup_img'); 
//закрытие 
export const popupImgClose = popupImg.querySelector('.popup__close');
//форма
export const formElementImg = popupImg.querySelector('.popup__form');
//инпут название карточки
export const nameInputImg = formElementImg.querySelector('.popup__input_value_card-name');
//инпут ссылка на изображение
export const linkInputImg = formElementImg.querySelector('.popup__input_value_card-link');


// для popup-photo (фото)
export const popupPhoto = '.popup_photo';
// export const popupPhotoClose = popupPhoto.querySelector('.popup__close');
// export const popupPhotoImg = popupPhoto.querySelector('.popup__photo-img');
// export const popupPhotoTitle = popupPhoto.querySelector('.popup__photo-title');

// для попап avatar
export const popupEditAvatar = document.querySelector('.popup_avatar');
export const formEditAvatar = popupEditAvatar.querySelector('.popup__form');
export const popupAvatarClose = popupEditAvatar.querySelector('.popup__close');
export const popupEditAvatarSelector = '.popup_avatar';

//кнопка редактирования
export const profileEdit = document.querySelector('.profile__edit');
export const profileInfoTitle = document.querySelector('.profile__title');
export const profileInfoSubtitle = document.querySelector('.profile__subtitle');

//
export const avatarImage = document.querySelector('.profile__avatar-overlay')
export const popupConfirmationSelector = '.popup_delete';

// кнопка редактирования
export const cardAdd = document.querySelector('.profile__add');
export const cardContainer = '.cards';
export const cardTemplateSelector = '#card-template'; 
export const cardTemplate = document.querySelector('#card-template').content;
export const closeButtons = document.querySelectorAll('.popup__close'); 

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};