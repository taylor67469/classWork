const mysql = require('mysql');
const inquirer = require('inquirer')
const question = [{
    type: 'list',
    name: 'myList',
    message: 'What would you like to do?',
    choices: ['Find song by artist', 'Find all artists who appear more than once', 'Find data within a specific range', 'search of a specific song', 'exit']
}]
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'password',
    database: 'top_songsDB',
});

function questionsList() {
    inquirer
        .prompt(question)
        .then((data)=>{
            console.log(data.myList);
            toDo(data.myList);
        })

}
questionsList();
function toDo(data) {
    switch (data) {
        case 'Find song by artist':
            findArtistSong();
            break;
        case 'Find all artists who appear more than once':
            moreThanOnce();
            break;
        case 'Find data within a specific range':
            specificRange();
            break;
        case 'search of a specific song':
            findSong();
            break;
        case 'exit':
            done();
            break;

    }
}
function findArtistSong(){
inquirer
.prompt({
    type:'input',
    name:'aSong',
    message:'Search for songs by artist.'
})
.then((data)=>{
    console.log(`You have searched for songs by ${data}`);
    connection.query(
        'SELECT * FROM top5000 ?',
        {song:data.song},
        (err,res)=>{
            if (err) throw err;
            if (res[0]){
                console.log(`Position: ${res[0].position} || Song: ${res[0].song} || Artist ${res[0].artist}`);
            }
        }

    )
    
})
}
function moreThanOnce(){

}
function specificRange(){
    inquirer
    prompt({
        type:'input',
        name:'sRange',
        message:'Find data within a specific range.'
    })
}
function findSong(){
    inquirer
    prompt({
        type:'input',
        name:'fSong',
        message:'Search for song title'
    })
}
function done(){

}