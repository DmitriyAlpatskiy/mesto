validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
  }; 
  
  
  const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };


  const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = '';
  };
  
  
  const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config)
    } else {
      hideInputError(formElement, inputElement, config);
    }
  };
  
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  

  const setEventListener = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toogleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, config);
        toogleButtonState(inputList, buttonElement, config);
      });
    });
  };


  const toogleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
      // buttonElement.setAttribute('disabled', true); тут у меня так и не сработала деактивация кнопки, не понимаю почему
      buttonElement.classList.add(config.inactiveButtonClass);
    } else {
      // buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(config.inactiveButtonClass);
    }
  };

  
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
  
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListener(formElement, config);
    });
  };
  
  enableValidation(validationConfig);