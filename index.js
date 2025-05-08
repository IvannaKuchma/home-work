async function getData(segment) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const fullUrl = `${baseUrl}${segment}`;
  
    try {
      const response = await fetch(fullUrl);
  
      if (response.ok) {
        const data = await response.json();
        console.log('Отримані дані:', data);
        return data;
      } else {
        console.error('HTTP помилка зі статусом:', response.status);
        return response.status;
      }
    } catch (error) {
      console.error('Помилка при виконанні запиту:', error.message);
      return error.message;
    }
  }

  async function postData(segment, data) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const fullUrl = `${baseUrl}${segment}`;
  
    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Успішна відповідь:', result);
        return result;
      } else {
        const errorMsg = `Помилка запиту: статус ${response.status}`;
        console.error(errorMsg);
        return errorMsg;
      }
    } catch (error) {
      console.error('Помилка при виконанні запиту:', error.message);
      return error.message;
    }
  }

  
  async function putData(id, data) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Оновлення успішне:', result);
        return result;
      } else {
        const errorMsg = `Помилка запиту: статус ${response.status}`;
        console.error(errorMsg);
        return errorMsg;
      }
    } catch (error) {
      console.error('Помилка при виконанні PUT-запиту:', error.message);
      return error.message;
    }
  }
  

  async function patchData(id, data) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Оновлення (PATCH) успішне:', result);
        return result;
      } else {
        const errorMsg = `Помилка запиту: статус ${response.status}`;
        console.error(errorMsg);
        return errorMsg;
      }
    } catch (error) {
      console.error('Помилка при виконанні PATCH-запиту:', error.message);
      return error.message;
    }
  }

  
  async function deleteData(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log(`Post with id ${id} has been successfully deleted.`);
        return true;
      } else {
        console.error(`Failed to delete post with id ${id}. Status: ${response.status}`);
        return response.status;
      }
    } catch (error) {
      console.error(`Error during deletion: ${error.message}`);
      return error.message;
    }
  }
  
  export { getData, postData, putData, patchData, deleteData };

  