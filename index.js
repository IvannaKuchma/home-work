function createDomElement(tagName, textContent, container) {
    const element = document.createElement(tagName)
    element.textContent = textContent
    container.appendChild(element)
    return element
}
 const container = document.body
const newElement = createDomElement('p', 'This paragraph has been added to the specified container.', container)
console.log(newElement) 

  

function setUserInfoCookie(key, value) {
    const encodedKey = encodeURIComponent(key)
    const encodedValue = encodeURIComponent(value)
    const cookieValue = `${encodedKey}=${encodedValue}`
  
    const expires = new Date(Date.now() + 10 * 1000).toUTCString()
    document.cookie = `userInfo=${cookieValue}; expires=${expires}; path=/`
  
    console.log(`Cookie 'userInfo' встановлено: ${cookieValue} (діє 10 секунд)`)
  }
  setUserInfoCookie('language', 'en')



  function saveUserInfo(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`Saved ${key}: ${value}`);
  }
  function getUserInfo(key) {
    const value = sessionStorage.getItem(key);
    if (value !== null) {
      console.log(`Retrieved ${key}: ${value}`);
      return value;
    } else {
      console.log(`${key} not found in sessionStorage`);
      return null;
    }
  }
saveUserInfo('username', 'JohnDoe');
console.log(getUserInfo('username')); 


    