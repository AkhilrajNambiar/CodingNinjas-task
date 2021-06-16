$(document).ready(function(){
	$('#webinarslink').click(function(){
		$('#webinars').css('display','block');
		$('#allevents').css('display','none');
		$('#codingevents').css('display','none');
		$('#bootcamp').css('display','none');
		$('#workshop').css('display','none');
		$('#alleventslink').attr('class','nav-link');
		$('#webinarslink').attr('class','nav-link active eventtablelink');
		$('#codingeventslink').attr('class','nav-link');
		$('#bootcamplink').attr('class','nav-link');
		$('#workshoplink').attr('class','nav-link');
	});
	$('#alleventslink').click(function(){
		$('#webinars').css('display','none');
		$('#allevents').css('display','block');
		$('#codingevents').css('display','none');
		$('#bootcamp').css('display','none');
		$('#workshop').css('display','none');
		$('#alleventslink').attr('class','nav-link active eventtablelink');
		$('#webinarslink').attr('class','nav-link');
		$('#codingeventslink').attr('class','nav-link');
		$('#bootcamplink').attr('class','nav-link');
		$('#workshoplink').attr('class','nav-link');
	});
	$('#codingeventslink').click(function(){
		$('#webinars').css('display','none');
		$('#allevents').css('display','none');
		$('#codingevents').css('display','block');
		$('#bootcamp').css('display','none');
		$('#workshop').css('display','none');
		$('#alleventslink').attr('class','nav-link');
		$('#webinarslink').attr('class','nav-link');
		$('#codingeventslink').attr('class','nav-link active eventtablelink');
		$('#bootcamplink').attr('class','nav-link');
		$('#workshoplink').attr('class','nav-link');
	});
	$('#bootcamplink').click(function(){
		$('#webinars').css('display','none');
		$('#allevents').css('display','none');
		$('#codingevents').css('display','none');
		$('#bootcamp').css('display','block');
		$('#workshop').css('display','none');
		$('#alleventslink').attr('class','nav-link');
		$('#webinarslink').attr('class','nav-link');
		$('#codingeventslink').attr('class','nav-link');
		$('#bootcamplink').attr('class','nav-link active eventtablelink');
		$('#workshoplink').attr('class','nav-link');
	});
	$('#workshoplink').click(function(){
		$('#webinars').css('display','none');
		$('#allevents').css('display','none');
		$('#codingevents').css('display','none');
		$('#bootcamp').css('display','none');
		$('#workshop').css('display','block');
		$('#alleventslink').attr('class','nav-link');
		$('#webinarslink').attr('class','nav-link');
		$('#codingeventslink').attr('class','nav-link');
		$('#bootcamplink').attr('class','nav-link');
		$('#workshoplink').attr('class','nav-link active eventtablelink');
	});
	$('.all1').click(function(){
		$('.all2').attr('class','nav-link all2');
		$('.all1').attr('class','nav-link active eventtablelink all1');
		$('.all3').attr('class','nav-link all3');
		$('#alleventslink').attr('class','nav-link active eventtablelink');
	});
	$('.all2').click(function(){
		$('.all2').attr('class','nav-link active eventtablelink all2');
		$('.all1').attr('class','nav-link all1');
		$('.all3').attr('class','nav-link all3');
		$('#alleventslink').attr('class','nav-link active eventtablelink');
	});
	$('.all3').click(function(){
		$('.all2').attr('class','nav-link all2');
		$('.all1').attr('class','nav-link all1');
		$('.all3').attr('class','nav-link active eventtablelink all3');
		$('#alleventslink').attr('class','nav-link active eventtablelink');
	});
	$('.ce1').click(function(){
		$('.ce2').attr('class','nav-link ce2');
		$('.ce1').attr('class','nav-link active eventtablelink ce1');
		$('.ce3').attr('class','nav-link ce3');
		$('#codingeventslink').attr('class','nav-link active eventtablelink');
	});
	$('.ce2').click(function(){
		$('.ce2').attr('class','nav-link active eventtablelink ce2');
		$('.ce1').attr('class','nav-link ce1');
		$('.ce3').attr('class','nav-link ce3');
		$('#codingeventslink').attr('class','nav-link active eventtablelink');
	});
	$('.ce3').click(function(){
		$('.ce2').attr('class','nav-link ce2');
		$('.ce1').attr('class','nav-link ce1');
		$('.ce3').attr('class','nav-link active eventtablelink ce3');
		$('#codingeventslink').attr('class','nav-link active eventtablelink');
	});
});