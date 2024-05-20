// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.form-body');
const formInput = formElement.querySelector('.form__field');
const formError = formElement.querySelector(`.${formInput.id}-error`);

  // Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add('form__button_inactive');
      document.getElementById("inputButton").disabled = true;
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove('form__button_inactive');
      document.getElementById("inputButton").disabled = false;
    }
  };


  const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
  
      return !inputElement.validity.valid;
    })
  }; 


  function validateTel(tel_data) {
    return /^(\+7|8)\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(tel_data)
        || /^(\+7|8)[0-9]{10}$/.test(tel_data) || tel_data.length === 0;
  }
  
  function validateEmail(email_data) {
    return /^[a-zA-Z0-9\-.]*@[a-zA-Z0-9\-.]*.[a-zA-Z]*$/.test(email_data) || email_data.length === 0;
  }
  
  function validateFeedback(feedback_data) {
    return /^[а-яА-Я0-9.,?!:;\- ]*$/.test(feedback_data);
  }


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add('form__field_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove('form__field_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  }; 


// Функция, которая проверяет валидность поля
function isValid(formElement, inputElement) {
  if (inputElement.id === "tel-input") {
    if (!validateTel(inputElement.value)) {
      showInputError(formElement, inputElement, "Неправильный формат номера");
    } else {
      hideInputError(formElement, inputElement);
    }
  } else
  if (inputElement.id === "email-input") {
    if (!validateEmail(inputElement.value)) {
      showInputError(formElement, inputElement, "Неправильный формат почты");
    } else {
      hideInputError(formElement, inputElement);
    }
  } else 
  if (inputElement.id === "feedback-input") {
    if (!validateFeedback(inputElement.value)) {
      showInputError(formElement, inputElement, "Неправильный текст фидбека (используйте только символы кириллицы, цифры 0-9, или символы '.', ',', '?', '!', ':', ';'. '-')");
    } else {
      hideInputError(formElement, inputElement);
    }
  } else if (!inputElement.validity.valid) {
      // showInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      // hideInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      hideInputError(formElement, inputElement);
  }
}; 


  const setEventListeners = (formElement) => {
    // Найдём все поля формы и сделаем из них массив
    const inputList = Array.from(formElement.querySelectorAll(`.form__field`));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector('.form__button');

      // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {

        isValid(formElement, inputElement);
  
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.form-body'));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement);
    });
  };
  
  // Вызовем функцию
  enableValidation();

setTimeout(function(){
  document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault();
    document.querySelector('.form__button').classList.add('form__button_loading');
    document.querySelector('.form__button').innerHTML = "Отправка..."
    setTimeout(function(){
      document.querySelector('.form__button').classList.add('form__button_succes');
      document.querySelector('.form__button').innerHTML = "Отправлено!"
      document.querySelector('.form__button').setAttribute('type', 'reset');
      document.getElementById('inputButton').click();
    }, 2000);
  });
}, 2000);
