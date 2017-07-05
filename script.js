
$(document).one('pagecreate', function(){
	
	$(document).on('swipeleft','[data-role=page]' , function(){
		console.log("swipe");
		var nextpage = $(this).next().attr('id');
		$.mobile.changePage('#' + nextpage, {transition: 'slide'} );
	});

	$(document).on('swiperight', '[data-role=page]', function(){
		console.log("swipe");
		var previouspage = $(this).prev().attr('id'); //get the id for the previous page
		$.mobile.changePage('#' + previouspage, {transition: 'slide', reverse: true});
	});

$.ajax({
		url: 'images.xml',
		type: 'GET',
		dataType: 'xml',
		success:parseXML
	});


	function parseXML(data){

		var counter = 1;

		$(data).find('image').each(function(){ //loops for all images

			var title = $(this).find('title').text();
			var desc = $(this).find('description').text();
			var url = $(this).find('url').text();

			
			$('<div></div>').attr('data-role' ,"page").attr('id', "img" + counter).appendTo('body');
			$('<div></div>').attr('id', "header" + counter).attr('data-role',"header").appendTo('#img'+counter);
			$('<h1></h1>').text(title).appendTo('#header' + counter);
			$('<div></div>').attr('id', "main" + counter).attr('role', "main").attr('class', "ui-content").appendTo('#img'+counter);
			$('<h3></h3>').text(desc).appendTo('#main' + counter);
			$('<img></img>').attr('src', url).appendTo('#main' + counter);

			counter++; 

		});
		$.mobile.navigate('#img1');
	}
});