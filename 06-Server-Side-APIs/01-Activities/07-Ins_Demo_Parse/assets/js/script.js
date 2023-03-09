fetch('https://api.github.com/orgs/twitter/public_members')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Public Members: Raw data \n----------');
    for(var i=0;i<data.length;i++){
        var urltag=$('<br> <a>');
        var ptag=$('<p>');
        ptag.text(data[i].login);
        urltag.text(data[i].url)
        urltag.attr('href',data[i].url);  
        $('#user-name').append(ptag);
        $('#url-access').append(urltag);

    }
  });

fetch('https://api.github.com/orgs/twitter/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Repositories: Names only \n----------');
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
  });
