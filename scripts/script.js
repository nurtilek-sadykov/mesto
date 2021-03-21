let likeButtonInactive = document.querySelectorAll('.element__like-button_inactive');

var likeButtonActive = document.querySelectorAll('.element__like-button_active');

for (let i = 0; i < likeButtonInactive.length; i++ ){
    likeButtonInactive[i].addEventListener('click', function () {
    likeButtonActive[i].classList.add('like-button_visible');
    });
};

let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
  }); 


let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupProfileTitle = document.querySelector('.popup__profile-title');
let popupProfileSubtitle = document.querySelector('.popup__profile-subtitle');
let submitButton = document.querySelector('.submit-button');
let popupCloseButton = document.querySelector('.popup__close-button');


submitButton.addEventListener('click', function() {
    if (popupProfileTitle.value !== "") {
        profileTitle.textContent = popupProfileTitle.value;
    } else if (popupProfileSubtitle.value !== "") {
        profileSubtitle.textContent = popupProfileSubtitle.value;
    } else {
        popup.classList.remove('popup_opened');
    }
        popup.classList.remove('popup_opened');});

popupCloseButton.addEventListener('click', function(){
    popup.classList.remove('popup_opened');
})