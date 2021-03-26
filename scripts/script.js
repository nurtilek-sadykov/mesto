let nameInput = document.querySelector('#edit-profile__profile-title');
let jobInput = document.querySelector('#edit-profile__profile-subtitle');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupCloseButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let formSubmitButton = document.querySelector('.edit-profile__submit-button');
let profileEditForm = document.querySelector('.edit-profile');

/*for (let i = 0; i < likeButtonInactive.length; i++ ){
    likeButtonInactive[i].addEventListener('click', function () {
    likeButtonActive[i].classList.add('like-button_visible');
    });
};*/





function formSubmitHandler(evt) {
        evt.preventDefault();
        profileTitle.textContent = nameInput.value;
        profileSubtitle.textContent = jobInput.value;
        popup.classList.remove('popup_opened');
    };

function popupOpen() {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileSubtitle.textContent;
        popup.classList.add('popup_opened');
  }; 

  function popupClose(){
    popup.classList.remove('popup_opened');
};

profileEditForm.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);