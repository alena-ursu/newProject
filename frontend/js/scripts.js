$(document).ready(function(){
	
	populateList();

	$("form").submit(function() {
		if($("#nameBox").val()){
			addToList($("#nameBox").val());
		}

		return false;
	});

	$("#submitBtn").on("click", function(e){

		e.preventDefault();

		if($("#nameBox").val()){

			addToList($("#nameBox").val());
		}
	});

	$('#logout').on('click', function(e){
		e.preventDefault();

		logout();
	})
});

function logout(){
	var cookie = JSON.parse($.cookie('user'));

	$.ajax({
		type: "GET",
		url: "http://localhost:3000/todos/" + cookie.id,
		headers: {
			'x-access-token': cookie.token
		}
	}).done(function(data){
		$.cookie('user', '');

		window.location = "index.html";
	});
}

function addToList(value){
	if(!$.cookie('user')) {
		window.location = "index.html";
	}

	var cookie = JSON.parse($.cookie('user'));

	$.ajax({
		type: "POST",
		url: "http://localhost:3000/todos/" + cookie.id,
		headers: {
			'x-access-token': cookie.token
		},
		data: {
			name: value
		}
	}).done(function(data){
		populateList();

		$("#nameBox").val("");
	});
}

function populateList(){
	console.log("populate");

	if(!$.cookie('user')) {
		window.location = "index.html";
	}

	var cookie = JSON.parse($.cookie('user'));

	$('#info').html('Username: <b>' + cookie.username + '</b>');
	$('#id').html('UserID: <b>' + cookie.id + '</b>');

	//"http://localhost:3000/todos/512a....

	$.ajax({
		type: "GET",
		url: "http://localhost:3000/todos/" + cookie.id,
		headers: {
			'x-access-token': cookie.token
		}
	}).done(function(data){

		var html = "";

		for(var t in data){
			var task = data[t];

			
			if(task.name){
				html += "<p id='" + task._id + "'>" + task.name + " - Status: " + (task.completed ? "Completed" : "Incomplete <a class='complete-button' href='#'>Mark Complete</a>") + "</p>";
			}
		}

		$('#container').html(html);

		$('.complete-button').on('click', function(e){
			
			var elementClicked = e.target;
			
			var parent = $(elementClicked).parent('p');

			console.log(parent);

			var id = $(parent).attr('id');

			console.log(id);

			$.ajax({
				url: 'http://localhost:3000/todos',
				type: 'PUT',
				data: {
					completed: true
				}
			}).done()
		});
	});
}		