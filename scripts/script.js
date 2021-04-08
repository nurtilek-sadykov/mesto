let nameInput = document.querySelector('#edit-profile__profile-title');
let jobInput = document.querySelector('#edit-profile__profile-subtitle');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupCloseButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup');
let formSubmitButton = document.querySelector('.edit-profile__submit-button');
let profileEditForm = document.querySelector('.edit-profile');
const elementsList = document.querySelector('.elements__list');
const newCardAddButton = document.querySelector('.profile__add-button');
const newCard = document.querySelector('.new-card');
const cardTemplate = document.querySelector('.card-template').content;
const cardPhotoPopUp = document.querySelector('.card-photo-popup');

function formSubmitHandler(evt) {
        evt.preventDefault();
        profileTitle.textContent = nameInput.value;
        profileSubtitle.textContent = jobInput.value;
        popUp.classList.remove('popup_opened');
    };

function popupOpen() {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileSubtitle.textContent;
        popUp.classList.add('popup_opened');
  }; 

  function popupClose(){
    popUp.style.transitionDuration = '0.5s';
    popUp.classList.remove('popup_opened');
};

profileEditForm.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

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
/* *** */
initialCards.forEach(function(elem) {
  
  const aCard = cardTemplate.querySelector('.element').cloneNode(true);
  aCard.querySelector('.element__title').textContent = elem.name;
  aCard.querySelector('.element__photo').src = elem.link;
  const deleteButton = aCard.querySelector('.element__delete');
  const likeButton = aCard.querySelector('.element__like-button');
  

  likeButton.addEventListener('click', function() { 
    likeButton.classList.toggle('element__like-button_active');
    });
  /*>>*/
      const popingUpCardPhoto = document.createElement('div');
  aCard.querySelector('.element__photo').addEventListener('click', function(){

      popingUpCardPhoto.classList.add('poping-up-card-photo');
      popingUpCardPhoto.style.backgroundImage = `url(${elem.link})`;
      cardPhotoPopUp.querySelector('.popup__container').style.width = 'auto';
      cardPhotoPopUp.querySelector('.popup__container').append(popingUpCardPhoto);
      cardPhotoPopUp.classList.add('popup_opened');
    });
  /*>>*/
  cardPhotoPopUp.querySelector('.popup__close-button').addEventListener('click', function(){
    cardPhotoPopUp.style.transitionDuration = '0.5s';
    cardPhotoPopUp.classList.remove('popup_opened');
    popingUpCardPhoto.remove();
  });
  
  elementsList.append(aCard);
  deleteButton.addEventListener('click', function(){
      aCard.remove();
    });
  });
/**** */ 


newCardAddButton.addEventListener('click', function(){
  newCard.classList.add('popup_opened');
});

newCard.querySelector('.popup__close-button').addEventListener('click', function(){
  newCard.style.transitionDuration = '0.5s';
  newCard.classList.remove('popup_opened');
});