import Cookies from 'js-cookie';

export function setCookies(key,value,cookie_expires,cookie_path,cookie_secure) {
  return Cookies.set(key,value,{expires: cookie_expires, path: cookie_path,secure: cookie_secure});
}
export function getCookie(key) {
  return Cookies.get(key)
}
