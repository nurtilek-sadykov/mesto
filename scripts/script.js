let nameInput = document.querySelector('#edit-profile__profile-title');
let jobInput = document.querySelector('#edit-profile__profile-subtitle');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupCloseButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup');
let formSubmitButton = document.querySelector('.edit-profile__submit-button');
let profileEditForm = document.querySelector('.edit-profile');
const likeButtons = document.querySelectorAll('.element__like-button');
const elementsList = document.querySelector('.elements__list');
const newCardAddButton = document.querySelector('.profile__add-button');
const newCard = document.querySelector('.new-card');
const cardTemplate = document.querySelector('.card-template').content;


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

likeButtons.forEach(function (item) {
    item.addEventListener('click', function() { 
    item.classList.toggle('element__like-button_active');
  })
});

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
  
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = elem.name;
  cardElement.querySelector('.element__photo').src = elem.link;
  const deleteButtons = cardElement.querySelectorAll('.element__delete');

  cardElement.querySelectorAll('.element__like-button').forEach(function (item) {
    item.addEventListener('click', function() { 
    item.classList.toggle('element__like-button_active');
    });
  });
  
  cardElement.querySelectorAll('.element__photo').forEach(item => {
    item.addEventListener('click', function(){
      const elementPhotoPopup = document.createElement('div');
      elementPhotoPopup.classList.add('element-photo-popup');
      elementPhotoPopup.style.backgroundImage = `url(${elem.link})`;
      popUp.querySelector('.popup__container').style.width = 'auto';
      profileEditForm.replaceWith(elementPhotoPopup);
      item = popUp;
      item.classList.add('popup_opened');
      });
    });

  elementsList.append(cardElement);
  deleteButtons.forEach(function (item){
    item.addEventListener('click', function(){
    cardElement.remove();
    });
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