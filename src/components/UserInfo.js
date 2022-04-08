export default class UserInfo {
    constructor({nameSelector, jobSelector, avatarSelector}) {
      this._nameSelector = document.querySelector(nameSelector);
      this._jobSelector = document.querySelector(jobSelector);
      this._avatarSelector = document.querySelector(avatarSelector)
    }
  
    getUserInfo() {
      this._userData = {
        name: this._nameSelector.textContent,
        about: this._jobSelector.textContent,
      };
      return this._userData
    }
  
    setUserInfo({ name, about, _id, avatar }) {
      this._jobSelector.textContent = about;
      this._nameSelector.textContent = name;
      this._userId = _id;
      this._avatarSelector.src = avatar;
      this._avatarSelector.alt = name;
    }

    getUserId() {
      return this._userId;
    }
  }