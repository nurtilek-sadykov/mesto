const nameInput = document.querySelector('#edit-profile-title');
const jobInput = document.querySelector('#edit-profile-subtitle');
const profileContainer = document.querySelector('.profile');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const editProfilePopupClose = document.querySelector('.edit-profile.popup__close-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const editProfile = document.querySelector('.edit-profile.popup');
/**/const profileEditForm = document.querySelector('.edit-profile.form');
const elementsList = document.querySelector('.elements__list');
const newCardAddButton = document.querySelector('.profile__add-button');
const addNewCard = document.querySelector('.add-new-card');
/**/const addNewCardForm = document.querySelector('.add-new-card.form')
const addNewCardPopupClose = document.querySelector('.add-new-card.popup__close-button')
const cardTemplate = document.querySelector('.card-template').content;
const popuperCardImage = document.querySelector('.card-image__element');
const imageCaption = document.querySelector('.card-image__caption');
const toPopupCardImageContainer = document.querySelector('.card-image.popup');
const editProfileFormSubmitButton = document.querySelector('.edit-profile.form__submit-button');
const profileInfo = document.querySelector('.profile__info');
const newCardNameInput = document.querySelector('#add-new-card-form-title');
const newCardLinkInput = document.querySelector('#add-new-card-form-link');
const closePopupButton = document.querySelector('.popup__close-button');
const cardImagePopupClose = document.querySelector('.card-image.popup__close-button');
const cardTemplatesElement = cardTemplate.querySelector('.element');
const overlayOfPopupForm = document.querySelector('.popup');
const popupList = document.querySelectorAll('.popup');


function formSubmitHandler(evt) { 
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value; 
  profileSubtitle.textContent = jobInput.value;
  closePopup(editProfile);
} 

function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  const newObjectBuiltWithNewInputData = {
  name: newCardNameInput.value,
  link: newCardLinkInput.value
  }
  addCard(newObjectBuiltWithNewInputData, elementsList);
  addNewCardForm.reset();
  closePopup(addNewCard);
}

function openPopup(element) {
    element.classList.add('popup_opened')
  }; 

function closePopup(element){
  element.classList.remove('popup_opened');
};

function createCard (data) {
    const newCard = cardTemplatesElement.cloneNode(true);
    newCard.querySelector('.element__title').textContent = data.name;
    newCard.querySelector('.element__photo').src = data.link;
    newCard.querySelector('.element__photo').alt = `Изображение ${data.name}`;
    const deleteButton = newCard.querySelector('.element__delete');
    const likeButton = newCard.querySelector('.element__like-button');
    const newCardImage = newCard.querySelector('.element__photo');
    

    likeButton.addEventListener('click', () => { 
      likeButton.classList.toggle('element__like-button_active');
    });
  
    newCardImage.addEventListener('click', () => {
      popuperCardImage.src = newCardImage.src;
      imageCaption.textContent = `${data.name}`;
      popuperCardImage.alt = `Изображение ${data.name}`;
      openPopup(toPopupCardImageContainer);
    });
  
    deleteButton.addEventListener('click', () => {
      newCard.remove();
    });

    return newCard;
}

function renderCard(data, wrap) {
  wrap.append(createCard(data));
 }

function renderCardFromInput(data, wrap) {
  wrap.prepend(createCard(data));
}

 function addCard (data, wrap){
    renderCardFromInput(data, wrap);
 }
 
 function buildCardsFromDataBase (obj, wrap){
  obj.forEach((data) => {
    renderCard(data, wrap);
  })
 }

 function closePopupByOverlay (popupElement) {
  popupElement.addEventListener('click', function(evt) {
    evt.stopPropagation();
    if (evt.target === popupElement && evt.target !== popupElement.childNodes)
    closePopup(popupElement);
})
}

 function closePopupByEsc (popupElement) {
    window.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      closePopup(popupElement);
      }
  })
 }

 /*валидация форм*/
 const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

 const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    if(inputElement.value.length === 1) {
      showInputError(formElement, inputElement, `Минимальное количество символов: 2. Длина текста сейчас: ${inputElement.value.length}`);
    } else if (inputElement.type === "url") {
      showInputError(formElement, inputElement, "Введите адрес сайта");
    } else {
    showInputError(formElement, inputElement, "Вы пропустили это поле.");
    }
  } else {
    hideInputError(formElement, inputElement);
  }
};
/** */
  
 /***/

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit-button_inactive');
  } else {
    buttonElement.classList.remove('form__submit-button_inactive');
  }
};

  setEventListeners(profileEditForm);
  setEventListeners(addNewCardForm);
/*const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      setEventListeners(formElement);
    });
    
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    
    fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
});
  });
 
};*/

 

/*enableValidation();*/
 /** */

/*закрыть попап через esc */

 popupList.forEach((item) => {
   closePopupByEsc(item);
 });

 /** */

/*закрыть попап через оверлэй*/

 popupList.forEach((item) => {
  closePopupByOverlay(item);
});
/** */
cardImagePopupClose.addEventListener('click', () => {
      closePopup(toPopupCardImageContainer);
    });

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(editProfile);
});

nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;



editProfilePopupClose.addEventListener('click', () => {
  closePopup(editProfile);
});

newCardAddButton.addEventListener('click', () => {
  openPopup(addNewCard);
});

addNewCardPopupClose.addEventListener('click', () => {
  closePopup(addNewCard);
});

profileEditForm.addEventListener('submit', formSubmitHandler);

addNewCardForm.addEventListener('submit', cardFormSubmitHandler);


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  buildCardsFromDataBase(initialCards, elementsList);
  console.log(nameInput.validity.valid);checkInputValidity(profileEditForm, nameInput);