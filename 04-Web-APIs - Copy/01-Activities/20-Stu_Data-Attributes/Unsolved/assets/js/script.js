var container = document.querySelector(".container");
container.addEventListener("click", function(event) {
  var element = event.target;
  // console.log('NUmber we wanna dispaly ??? ', element.dataset)
  // console.log('hide or show ??', element.dataset.state)
  if (element.dataset.state === 'hidden'){
    console.log('TIME TO SHOW THE NUMBER')
    element.dataset.state = 'show'
    element.textContent = element.dataset.number 
  } else {
    console.log('TIME TO HIDE THE NUMBER!!')
    element.dataset.state = 'hidden'
    element.textContent = ""
  }
  // element.textContent = element.dataset.number
  // TODO: Complete function
});
// element.dataset.number;