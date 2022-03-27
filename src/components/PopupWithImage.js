 import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
  
      this._popupPhotoTitle = this._popup.querySelector('.popup__photo-title')
      this._popupPhotoImg = this._popup.querySelector('.popup__photo-img')
    }
  
    open(name, link) {
      super.open();
      this._popupPhotoTitle.textContent = name;
      this._popupPhotoImg.alt = name;
      this._popupPhotoImg.src = link;
    }
  }