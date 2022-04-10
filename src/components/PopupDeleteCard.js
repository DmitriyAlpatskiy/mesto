import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor({popupSelector, handleConfirmation}) {
    super(popupSelector);

    this._confirmationButton = this._popup.querySelector('.popup__save');
    this._handleConfirmation = handleConfirmation;
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.toggleRenderLoading('Удаление...');
      this._handleConfirmation(this._cardId)
    });
  }
  
  setCardId(cardId) {
    this._cardId = cardId;
  }

  toggleRenderLoading(buttonText = 'Да') {
    this._confirmationButton.textContent = buttonText;
  }
}

//this._confirmationButton = this._popup.querySelector('.popup__save');