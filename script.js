$(document).ready(function() {
    var id = 1;
    var currentElement = "";
	$("#btnNew").click(function() {
        var newNote = $("<div class='sticky green' id='sticky" + id +"'><textarea>Add Your Note</textarea></div>").draggable({stack:".sticky"});
        currentElement = "sticky" + id;
        id++;
        $("#container").append(newNote);
    });
    $("#container").on("click", ".sticky", function(){
        currentElement = $(this).attr("id");
    });
    $("#container").on("click", "textarea", function(){
        var maximum = getMax(".sticky");
        $(this).parent().css("z-index", (maximum+1));
    });
    $(".box").click(function() {
        if (currentElement != "") {
            var color = $(this).attr("class").split(" ")[0];
            $("#" + currentElement).removeClass();
            $("#" + currentElement).addClass("sticky " + color);
        } 
    });
});

function getMax(items) {
    var max = 0;
    $(items).each(function() {
        var z = $(this).css("z-index");
        if (z == "auto") {
            z = 1;
        } 
        max = Math.max(max, z);
    });
    return max;
}



