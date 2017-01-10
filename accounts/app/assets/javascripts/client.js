import 'whatwg-fetch';

 var parseJson = function (response) {
    console.log(response.json())
  }

  var getTimers = function(success) {
    return fetch('/api/timers', {
      headers: {
        Accept: 'application/json',
      },
    }).then(parseJson);
  }



