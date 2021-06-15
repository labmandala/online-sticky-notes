$(document).ready(function() {
    var id = 1;
    var currentElement = "";
	$("#btnNew").click(function() {
        var newNote = $("<div class='sticky green' id='sticky" + id +"'><textarea>Add Your Note</textarea></div>").draggable();
        currentElement = "sticky" + id;
        id++;
        $("#container").append(newNote);
    });
    $("#container").on("click", ".sticky", function(){
        currentElement = $(this).attr("id");
    });
    $(".box").click(function() {
        if (currentElement != "") {
            var color = $(this).attr("class").split(" ")[0];
            $("#" + currentElement).removeClass();
            $("#" + currentElement).addClass("sticky " + color);
        }
    });
});
