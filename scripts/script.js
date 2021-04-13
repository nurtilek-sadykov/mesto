const nameInput = document.querySelector('#edit-profile__profile-title');
const jobInput = document.querySelector('#edit-profile__profile-subtitle');
const profileContainer = document.querySelector('.profile');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const editProfilePopupClose = document.querySelector('.edit-profile.popup__close-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const editProfile = document.querySelector('.edit-profile.popup');
const profileEditForm = document.querySelector('.edit-profile.form');
const elementsList = document.querySelector('.elements__list');
const newCardAddButton = document.querySelector('.profile__add-button');
const addNewCard = document.querySelector('.add-new-card');
const addNewCardForm = document.querySelector('.add-new-card.form')
const addNewCardPopupClose = document.querySelector('.add-new-card.popup__close-button')
const cardTemplate = document.querySelector('.card-template').content;
const popuperCardImage = document.querySelector('.card-image__element');
const imageCaption = document.querySelector('.card-image__caption');
const toPopupCardImageContainer = document.querySelector('.card-image.popup');
const editProfileFormSubmitButton = document.querySelector('.edit-profile.form__submit-button');
const profileInfo = document.querySelector('.profile__info');
const newCardNameInput = document.querySelector('#add-new-card-form__title');
const newCardLinkInput = document.querySelector('#add-new-card-form__link');
/*>>>*/

function formSubmitHandler(evt) { 
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value; 
  profileSubtitle.textContent = jobInput.value;
  popupClose(editProfile);
} 

function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  const newArrayBuiltWithNewCard = [];
  newArrayBuiltWithNewCard.name = newCardNameInput.value;
  newArrayBuiltWithNewCard.link = newCardLinkInput.value;
  newCardByTemplate(newArrayBuiltWithNewCard);
  popupClose(addNewCard);
}

function popupOpen(element) {
    element.classList.add('popup_opened')
  }; 

function popupClose(element){
  element.classList.remove('popup_opened')
};

function newCardByTemplate (elem) {
    const newCard = cardTemplate.querySelector('.element').cloneNode(true);
    newCard.querySelector('.element__title').textContent = elem.name;
    newCard.querySelector('.element__photo').src = elem.link;
    const deleteButton = newCard.querySelector('.element__delete');
    const likeButton = newCard.querySelector('.element__like-button');
    const newCardImage = newCard.querySelector('.element__photo');
    const cardImagePopupClose = document.querySelector('.card-image.popup__close-button');

    likeButton.addEventListener('click', () => { 
      likeButton.classList.toggle('element__like-button_active');
    });
  
    newCardImage.addEventListener('click', () => {
      popuperCardImage.src = newCardImage.src;
      imageCaption.textContent = `${elem.name}`;
      popuperCardImage.alt = `Изображение + ${elem.name}`;
      popupOpen(toPopupCardImageContainer);
    });
  
    cardImagePopupClose.addEventListener('click', () => {
      popupClose(toPopupCardImageContainer);
    });

    if (initialCards.includes(elem)) {
      elementsList.append(newCard);
    } else {
      elementsList.prepend(newCard);
    }
    
    deleteButton.addEventListener('click', () => {
      newCard.remove();
    });
  }
/*>>>*/

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent; 
  jobInput.value = profileSubtitle.textContent;
  popupOpen(editProfile);
});

editProfilePopupClose.addEventListener('click', () => {
  popupClose(editProfile);
});

newCardAddButton.addEventListener('click', () => {
  popupOpen(addNewCard);
});

addNewCardPopupClose.addEventListener('click', () => {
  popupClose(addNewCard);
});

profileEditForm.addEventListener('submit', formSubmitHandler);

addNewCardForm.addEventListener('submit', cardFormSubmitHandler);


/*>>>*/

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

  initialCards.forEach(function(elem) {

    newCardByTemplate(elem);

});
/*>>>*/



