var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  Access-Control-Allow-Origin: http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=b3728dc63fb34871b98161dc2a1a85f7&runnumber=123
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', 'http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=b3728dc63fb34871b98161dc2a1a85f7&runnumber=123');
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
