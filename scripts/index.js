const initialCards = [
    {
      name: 'Эльбрус, Кабардино-Балкария',
      link: './images/elbrus.jpg'
    },
    {
      name: 'Дагестан',
      link: './images/dagestan.jpg'
    },
    {
      name: 'Домбай',
      link: './images/dombay.jpg'
    },
    {
      name: 'Адыгея',
      link: './images/mountains.jpg'
    },
    {
      name: 'Ай-Петри',
      link: './images/aypetri.jpg'
    },
    {
      name: 'Севастополь',
      link: './images/sevastopol.jpg'
    }
  ];

const modalWindow = document.querySelector('.popup');
const modalWindowCloseBtn = modalWindow.querySelector('.popup__close');
const aboutProjectLink = document.querySelector('.profile__edit');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_value_name');
let jobInput = formElement.querySelector('.popup__input_value_prof');
let profileInfoTitle = document.querySelector('.profile__title');
let profileInfoSubtitle = document.querySelector('.profile__subtitle');
// для popup-photo
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoClose = popupPhoto.querySelector('.popup-photo__close');
const popupPhotoImg = popupPhoto.querySelector('.popup-photo__img');
const popupPhotoTitle = popupPhoto.querySelector('.popup-photo__title');


// для popup-img 
const modalWindowImg = document.querySelector('.popup-img');
const modalWindowCloseBtnImg = modalWindowImg.querySelector('.popup-img__close');
const aboutProjectAdd = document.querySelector('.profile__add');
const nameInputImg = formElement.querySelector('.popup-img__input_value_name');
const linkInputImg = formElement.querySelector('.popup-img__input_value_link');
const cardForm = document.querySelector('.popup-img__form');

const cardContainer = document.querySelector('.cards')
const cardTemplate = document.querySelector('#card-template').content;



// функция для попапа редактирования профиля
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

//вставил новые значения 
profileInfoTitle.textContent = nameInput.value;
profileInfoSubtitle.textContent = jobInput.value;
removeModalWindow();
};


formElement.addEventListener('submit', formSubmitHandler); 
modalWindowCloseBtn.addEventListener('click', removeModalWindow);

// функция add для popup-img
function addmodalWindowImg() {
    modalWindowImg.classList.add('popup-img_opened');
}
aboutProjectAdd.addEventListener('click', addmodalWindowImg);

// функция remove для popup-img
function removemodalWindowImg() {
    modalWindowImg.classList.remove('popup-img_opened');
}
modalWindowCloseBtnImg.addEventListener('click', removemodalWindowImg);


 
  const renderCard = (element) => {
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
      togglePopupPhoto(popupPhoto);
    });

    popupPhotoClose.addEventListener('click', removePopupPhoto);
    
    cardContainer.prepend(cardElement);
};

initialCards.forEach(renderCard);



function togglePopupPhoto (popupPhoto) {
  popupPhoto.classList.toggle('popup-photo_opened');
};

function removePopupPhoto () {
  popupPhoto.classList.remove('popup-photo_opened');
}

const addNewCard = (event) => {
    event.preventDefault();
    const newCard = {};

    newCard.name = event.target.querySelector('.popup-img__input_value_name').value;
    newCard.link = event.target.querySelector('.popup-img__input_value_link').value;

    renderCard(newCard);
    removemodalWindowImg(modalWindowImg);
};

cardForm.addEventListener('submit', addNewCard);

