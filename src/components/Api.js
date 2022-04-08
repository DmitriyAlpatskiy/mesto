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
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }
  
    //получение карточек
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

    //изменить инфо
    editUserInfo(userInfo) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(userInfo)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

    //добавить карточку
    addCard(cardContent) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(cardContent)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

    //удалить карточку
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

    //добавить лайк
    addCardLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

    //удалить лайк
    removeCardLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }
    
    //смена аватарки
    editUserAvatar(avatarLink) {
        return fetch(`${this._baseUrl}/users/me/avatar `, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(avatarLink)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

  }

