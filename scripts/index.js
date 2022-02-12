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
const cardTemplate = document.querySelector('#card-template').content;
const closeButtons = document.querySelectorAll('.popup__close'); 


function createCard(element) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = element.name;
  const cardImage = cardElement.querySelector('.card__photo');
  cardImage.src = element.link;
  cardImage.alt = element.name;


    //удаление 
  const deleteButton = cardElement.querySelector('.card__del');
  deleteButton.addEventListener('click', function (event) {
      event.target.closest('.card').remove();
  });

  // like
  const cardLike = cardElement.querySelector('.card__like');
  cardLike.addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like_active');
  });

  cardImage.addEventListener('click', function () {
    popupPhotoImg.src = element.link;
    popupPhotoImg.alt = element.name;
    popupPhotoTitle.textContent = element.name;
    openPopup(popupPhoto);
  });

  return cardElement;
};


const renderCard = (element) => {
  const cardElement = createCard(element)
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


