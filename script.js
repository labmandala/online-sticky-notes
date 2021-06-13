$(document).ready(function() {
    var id = 1;
	$("#btnNew").click(function(){
        var newNote = "$('<div class='sticky greeen' id='sticky" + id +"'><textarea>Add Your Note</textarea></div>)draggable()";
        id++;
        $("#container").append(newNote);
    });
});
