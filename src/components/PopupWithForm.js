import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
  
      this._form = this._popup.querySelector('.popup__form')
      this._inputList = this._popup.querySelectorAll('.popup__input')
      this._submitButton = this._popup.querySelector('.popup__save')
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
        this.toggleRenderLoading('Сохранение...');
        this._handleFormSubmit(this._getInputValues());
  
      });
    }

    toggleRenderLoading(buttonText = 'Сохранить') {
      this._submitButton.textContent = buttonText;
    }
  
    
  }