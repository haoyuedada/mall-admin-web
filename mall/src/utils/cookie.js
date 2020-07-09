import Cookies from 'js-cookie';

export function setCookies(key,value) {
  return Cookies.set(key,value,{expires: 7, path: "/",secure: false});
}
export function getCookie(key) {
  return Cookies.get(key)
}
