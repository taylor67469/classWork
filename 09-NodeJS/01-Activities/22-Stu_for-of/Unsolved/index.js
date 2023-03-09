let songs=document.querySelectorAll('ul>li');
console.log(songs)
for (const value of songs){
    value.classList.add('red');
}   