function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidUrl(url) {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/;
    return urlRegex.test(url);
  }
    console.log(isValidEmail('example@example.com')) 
    console.log(isValidEmail('invalid-email'))  
    console.log(isValidUrl('https://www.example.com')) 
    console.log(isValidUrl('invalid-url')) 



  