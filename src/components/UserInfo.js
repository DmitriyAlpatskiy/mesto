export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
      this._nameSelector = document.querySelector(nameSelector);
      this._jobSelector = document.querySelector(jobSelector)
    }
  
    getUserInfo() {
      this._userData = {
        name: this._nameSelector.textContent,
        job: this._jobSelector.textContent,
      };
      return this._userData
    }
  
    setUserInfo({name, job}) {
      this._nameSelector.textContent = name;
      this._jobSelector.textContent = job;
    }
  }