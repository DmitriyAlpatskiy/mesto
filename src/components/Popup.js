export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._closePopup = this._popup.querySelector('.popup__close');
    }
  
    open() {
      this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    };
  
    _closePopupOverlay = (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    };
  
    setEventListener() {
      this._popup.addEventListener('click', this._closePopupOverlay);
      this._closePopup.addEventListener('click', () => {
        this.close();
      });
    }
}