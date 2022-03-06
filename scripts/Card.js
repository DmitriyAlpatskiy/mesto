export  class Card {
  constructor(data, settings, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._template = document.querySelector(settings).content.querySelector('.card');
    this._handleCardClick = handleCardClick;

  }

 
  // возвращаем разметку
  _getTemplate() {
    this._cardElement = this._template.cloneNode(true);

    return this._cardElement;
  }

  generateCard() {
    // запишем разметку в поле элемент 
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.card__like');
    this._elementDelete = this._element.querySelector('.card__del');
    this._elementCardPhoto = this._element.querySelector('.card__photo');
    this._elementCardTitle = this._element.querySelector('.card__title');

    this._setEventListeners();

    // добавим данные 
    this._elementCardPhoto.src = this._link;
    this._elementCardPhoto.alt = this._name;
    this._elementCardTitle.textContent = this._name;

    //вернули наружу
    return this._element;
  }
  
  _addLike() {
    this._elementLike.classList.toggle('card__like_active');
  }
    
  _deleteCard() {
    this._element.remove();
  }

  

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => {
    this._addLike();
  });

  this._elementCardPhoto.addEventListener('click', () => {
    this._handleCardClick(this._name, this._link);
  });
      
    this._elementDelete.addEventListener('click', () => {
      this._deleteCard();
    });


  }
}
