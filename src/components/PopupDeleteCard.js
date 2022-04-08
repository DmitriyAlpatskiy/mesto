import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor({popupSelector, handleConfiramation}) {
      super(popupSelector);

      this._confirmationButton = this._popup.querySelector('.popup__save');
      this._handleConfiramation = handleConfiramation;
  }

  setEventListeners() {
    super.setEventListeners();
    
    this._confirmationButton.addEventListener('click', () => {
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

