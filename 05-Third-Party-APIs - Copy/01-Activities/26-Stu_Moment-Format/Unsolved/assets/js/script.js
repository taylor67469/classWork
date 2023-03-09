var gradDate = moment("6-14-2021", "MM-DD-YYYY").format('MMM Do, YYYY');
$("#1a").text(gradDate);
// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("1-1-2022", "MM-DD-YYYY").format('dddd');
$("#2a").text(weekDay);
// TODO: 3. Out of 365, what day of the year is today?
var now = moment().format('DDD');
$("#3a").text(now);
// TODO: 4. What is the current time in the format: hours:minutes:seconds
function updateClock() {
    var time = moment().format('h:mm:ss');
    $("#4a").text(time);
    setTimeout(updateClock, 1000);
}
updateClock();
// TODO: 5. What is the current Unix timestamp?
function updateUnixClock() {
    var unix = moment().format('x');
    $("#5a").text(unix);
    setTimeout(updateUnixClock, 1);
}
updateUnixClock();
// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment.unix(1318781876).format('MMMM Do YYYY, h:mm:ss a');
$("#6a").text(unixFormat);