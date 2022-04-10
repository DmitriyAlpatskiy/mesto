export default class Card {
  constructor({
    cardContent: {
      name,
      link,
      likes, 
      owner: { _id: cardOwnerId },
      _id: cardId
    }, templateSelector, userId, handleCardClick, handleDeleteClick, handleLikeClick}) {

    this._name = name;
    this._link = link;
    this._userId = userId;
    this._cardOwnerId = cardOwnerId;
    this._isOwner = userId === cardOwnerId ? true : false;
    this._cardId = cardId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

    this._element = this._getTemplate();
    this._element.id = this._cardId;
    
    // запишем разметку в поле элемент 
    this._elementLike = this._element.querySelector('.card__like');
    this._elementDelete = this._element.querySelector('.card__del');
    this._elementCardPhoto = this._element.querySelector('.card__photo');
    this._elementCardTitle = this._element.querySelector('.card__title');
    this._elementLikeCounter = this._element.querySelector('.card__like-count');

    if (!this._isOwner) { this._elementDelete.remove()}
    
    this._elementCardTitle.textContent = this._name;
    this._elementCardPhoto.src = this._link;
    this._elementCardPhoto.alt = this._name;

    this._setEventListeners();
    this.updateLikes(likes);
    
  }

  updateLikes(likes) {
    this._likes = likes;
    this._elementLikeCounter.textContent = likes.length;
    this._setLikedStatus(likes);
  }

  //  // Метод удаления карточки
  //  _deleteCard() {
  //   this._element.remove();
  // }

  _setLikedStatus(likes) {
    const likesOwnersIds = likes.map(like => like._id);

    if (likesOwnersIds.includes(this._userId)) {
      this._isLiked = true;
      this._elementLike.classList.add('card__like_active');
    } else {
      this._isLiked = false;
      this._elementLike.classList.remove('card__like_active');
    }
  }

  deleteCards() {
    this._element.remove();

    this._element = null;
  }
 
  // возвращаем разметку
  _getTemplate() {
    this._cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return this._cardTemplate;
  }
  

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => {
      this._handleLikeClick(this._cardId, this._isLiked);
  });

  this._elementCardPhoto.addEventListener('click', () => {
    this._handleCardClick(this._name, this._link);
  });
      
  this._elementDelete.addEventListener('click', () => {
    this._handleDeleteClick(this._cardId);
  });
  }

  generateCard() {
    return this._element;
  }

}
