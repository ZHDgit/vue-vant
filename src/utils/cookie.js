import Cookies from 'js-cookie'

export function getCookie (TokenKey) {
  return Cookies.get(TokenKey)
}

export function setCookie (TokenKey, token) {
  var millisecond = new Date().getTime()
  var expiresTime = new Date(millisecond + 60 * 1000 * 60 * 1)
  return Cookies.set(TokenKey, token, {
    expires: expiresTime
  })
}

export function removeCookie (TokenKey) {
  return Cookies.remove(TokenKey)
}
