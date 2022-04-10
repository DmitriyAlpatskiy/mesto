export default class Api {
    constructor({baseUrl, headers}) {
      this._headers = headers
      this._baseUrl = baseUrl
    }

    //получить инфо о пользователе
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(this._checkResponse);
    }
  
    //получение карточек
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(this._checkResponse);
    }

    //изменить инфо
    editUserInfo(userInfo) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(userInfo)
        })
        .then(this._checkResponse);
    }

    //добавить карточку
    addCard(cardContent) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(cardContent)
        })
        .then(this._checkResponse);
    }

    //удалить карточку
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(this._checkResponse);
    }


    //добавить лайк
    addCardLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
        .then(this._checkResponse);
    }

    //удалить лайк
    removeCardLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(this._checkResponse);
    }
    
    //смена аватарки
    editUserAvatar(avatarLink) {
        return fetch(`${this._baseUrl}/users/me/avatar `, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(avatarLink)
        })
        .then(this._checkResponse);
    }

    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      }

  }
