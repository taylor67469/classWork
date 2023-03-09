function updatetime(){
    var datentime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#DNT").text(datentime);
}
setInterval(updatetime,0);
$("#submit-user-info").on("click", function(){
    console.log("test");
    var nameInput = $("#nameInput").val();
    var dueDate = $("#dueDateInput").val();
    var days = moment(dueDate, "YYYY/MM/DD").diff(moment(),'day')
    console.log(nameInput,dueDate, days);
    var tRow = $("<tr>");
    var tData1 = $("<td>");
    tData1.text(nameInput);
    $("tbody").append(tRow);
    tRow.append(tData1);
})
