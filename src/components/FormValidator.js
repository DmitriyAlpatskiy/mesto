export default class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._settings = settings;

        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
        
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
      };
    
    
      _hideInputError = (inputElement) => {

        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.add(this._settings.errorClass);
        errorElement.textContent = '';
      };


    _isValid = (inputElement) => {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage)
        } else {
          this._hideInputError(inputElement);
        }
      };

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        })
      };


    _toggleButtonState() {

        if (this._hasInvalidInput()) {
          this._buttonElement.setAttribute('disabled', true);
          this._buttonElement.classList.add(this._settings.inactiveButtonClass);
        } else {
          this._buttonElement.removeAttribute('disabled');
          this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
        }
      };

      resetValidation() {
        this._toggleButtonState(); 

        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement) 
        });
      }

    _setEventListener() {

        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._isValid(inputElement);
            this._toggleButtonState();
          });
        });
      };


    enableValidation() {
          this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
          });

          this._setEventListener();
    }
}



 

