/* eslint-disable no-console */
/* eslint-disable no-undef */

client = (function () {
  function getTimers(success) {
    return fetch('/api/timers', {
      headers: {
        Accept: 'application/json',
      },
    }).then(checkStatus)
      .then(parseJSON)
      .then(success);
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  function startTimer(data){
    console.log(JSON.stringify(data));
    return fetch('/api/timers/start', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus)
  }

  function stopTimer(data){
    console.log(JSON.stringify(data));
    return fetch('/api/timers/stop', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus)
  }

  function createTimer(data){
    console.log(JSON.stringify(data));
    return fetch('/api/timers/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus)
  }

  function deleteTimer(id, data){
    console.log(JSON.stringify(data));
    return fetch('/api/timers/'+id, {
      method: 'delete',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus)
  }

  function updateTimer(id, data){
    console.log(JSON.stringify(data));
    return fetch('/api/timers/'+id, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus)
  }



  return {
    getTimers,
    startTimer,
    stopTimer,
    createTimer,
    deleteTimer,
    updateTimer
  };
}());
