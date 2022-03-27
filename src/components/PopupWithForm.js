import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
  
      this._form = this._popup.querySelector('.popup__form')
      this._inputList = this._popup.querySelectorAll('.popup__input')
    }
  
    _getInputValues() {
      this._formValues = {};
  
      //добавляем в этот объект значения всех полей
      this._inputList.forEach(input => {
        this._formValues[input.name] = input.value;
      });
  
      return this._formValues;
    }

    close() {
      super.close();
      this._form.reset();
    }
  
    setEventListener() {
      super.setEventListener();
  
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
  
        this._handleFormSubmit(this._getInputValues());
  
      });
    }
  
    
  }