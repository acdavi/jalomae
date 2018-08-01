$(document).ready(function(){
	$("#explosion1").hide();
	$("#explosion2").hide();
	$("#shoot").hide();
});

var TECLA = {
	W:87,
	S:83,
	D:68,
	A:65
}

$(function(){
	$(document).keydown(function(e){
		switch(e.which){
			case TECLA.W:
				var topo = parseInt($("#player").css("top"));
				$("#player").css("top",topo-5);
break;
			case TECLA.S:
				var topo = parseInt($("#player").css("top"));
				$("#player").css("top",topo+5);
break;
			case TECLA.D:
				var lado = parseInt($("#player").css("left"));
				$("#player").css("left",lado+5);
break;
			case TECLA.A:
				var topo = parseInt($("#player").css("left"));
				$("#player").css("left",topo-5);
break;
		}
	})
})