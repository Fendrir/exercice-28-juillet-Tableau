console.log("y'a quelqu'un ?");

var line = 10;
var col = 10;

for (var i = 0; i < line; i++) {

	if (i%2 === 0){

		$("#table").append('<tr class="line"></tr>');

	} else {

		$("#table").append('<tr class="underLine"></tr>');

	}
	
}

for (var i = 0; i < col; i++) {

	if (i%2 === 0){
		$('.line').append("<td>"+i+"</td>");
		$(".underLine").append('<td class="black"></td>');

	} else {
		$('.underLine').append("<td></td>");
		$(".line").append('<td class="black"></td>');

	}
	
}