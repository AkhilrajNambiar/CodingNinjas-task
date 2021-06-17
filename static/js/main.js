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
		$('.webinar2').attr('class','nav-link webinar2');
		$('.webinar1').attr('class','nav-link active eventtablelink webinar1');
		$('.webinar3').attr('class','nav-link webinar3');
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
		$('.all2').attr('class','nav-link all2');
		$('.all1').attr('class','nav-link active eventtablelink all1');
		$('.all3').attr('class','nav-link all3');
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
		$('.ce2').attr('class','nav-link ce2');
		$('.ce1').attr('class','nav-link active eventtablelink ce1');
		$('.ce3').attr('class','nav-link ce3');
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
		$('.bc2').attr('class','nav-link bc2');
		$('.bc1').attr('class','nav-link active eventtablelink bc1');
		$('.bc3').attr('class','nav-link bc3');
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
		$('.work2').attr('class','nav-link work2');
		$('.work1').attr('class','nav-link active eventtablelink work1');
		$('.work3').attr('class','nav-link work3');
	});
	$('.all1').click(function(){
		$('.all2').attr('class','nav-link all2');
		$('.all1').attr('class','nav-link active eventtablelink all1');
		$('.all3').attr('class','nav-link all3');
	});
	$('.all2').click(function(){
		$('.all2').attr('class','nav-link active eventtablelink all2');
		$('.all1').attr('class','nav-link all1');
		$('.all3').attr('class','nav-link all3');
	});
	$('.all3').click(function(){
		$('.all2').attr('class','nav-link all2');
		$('.all1').attr('class','nav-link all1');
		$('.all3').attr('class','nav-link active eventtablelink all3');
	});
	$('.ce1').click(function(){
		$('.ce2').attr('class','nav-link ce2');
		$('.ce1').attr('class','nav-link active eventtablelink ce1');
		$('.ce3').attr('class','nav-link ce3');
	});
	$('.ce2').click(function(){
		$('.ce2').attr('class','nav-link active eventtablelink ce2');
		$('.ce1').attr('class','nav-link ce1');
		$('.ce3').attr('class','nav-link ce3');
	});
	$('.ce3').click(function(){
		$('.ce2').attr('class','nav-link ce2');
		$('.ce1').attr('class','nav-link ce1');
		$('.ce3').attr('class','nav-link active eventtablelink ce3');
	});
	$('.bc1').click(function(){
		$('.bc2').attr('class','nav-link bc2');
		$('.bc1').attr('class','nav-link active eventtablelink bc1');
		$('.bc3').attr('class','nav-link bc3');
	});
	$('.bc2').click(function(){
		$('.bc2').attr('class','nav-link active eventtablelink bc2');
		$('.bc1').attr('class','nav-link bc1');
		$('.bc3').attr('class','nav-link bc3');
	});
	$('.bc3').click(function(){
		$('.bc2').attr('class','nav-link bc2');
		$('.bc1').attr('class','nav-link bc1');
		$('.bc3').attr('class','nav-link active eventtablelink bc3');
	});
	$('.webinar1').click(function(){
		$('.webinar2').attr('class','nav-link webinar2');
		$('.webinar1').attr('class','nav-link active eventtablelink webinar1');
		$('.webinar3').attr('class','nav-link webinar3');
	});
	$('.webinar2').click(function(){
		$('.webinar2').attr('class','nav-link active eventtablelink webinar2');
		$('.webinar1').attr('class','nav-link webinar1');
		$('.webinar3').attr('class','nav-link webinar3');
	});
	$('.webinar3').click(function(){
		$('.webinar2').attr('class','nav-link webinar2');
		$('.webinar1').attr('class','nav-link webinar1');
		$('.webinar3').attr('class','nav-link active eventtablelink webinar3');
	});
	$('.work1').click(function(){
		$('.work2').attr('class','nav-link work2');
		$('.work1').attr('class','nav-link active eventtablelink work1');
		$('.work3').attr('class','nav-link work3');
	});
	$('.work2').click(function(){
		$('.work2').attr('class','nav-link active eventtablelink work2');
		$('.work1').attr('class','nav-link work1');
		$('.work3').attr('class','nav-link work3');
	});
	$('.work3').click(function(){
		$('.work2').attr('class','nav-link work2');
		$('.work1').attr('class','nav-link work1');
		$('.work3').attr('class','nav-link active eventtablelink work3');
	});
});