import Popup from './Popup.js';

export default class PopupConfirmationDelete extends Popup {
  constructor({popupSelector, handleConfirmationDelete}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form')
    this._confirmationButton = this._popup.querySelector('.popup__save');
    this._handleConfirmationDelete = handleConfirmationDelete;
  }

    changeSubmitHandler(newSubmitHandler) {
      this._handleConfirmationDelete = newSubmitHandler
    }

  setEventListener() {
    super.setEventListener();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    //   this.toggleRenderLoading('Удаление...');
      this._handleConfirmationDelete()
    });
  }
  
//   setCardId(cardId) {
//     this._cardId = cardId;
//   }

//   toggleRenderLoading(buttonText = 'Да') {
//     this._confirmationButton.textContent = buttonText;
//   }
}