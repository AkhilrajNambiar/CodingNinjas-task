var king_tags = document.querySelector('#king_tags');
var tags = ["Interview Preparation","Contest Solutions","Competitive Programming","Futuristic Tech","Coding Concepts","Career Guidance","Web Development","Android","Machine Learning","Campus Event","Online Coding Event","Hackathon","Women Who Code","GSoC","Placement","Aptitude Preparation","Efficient Coding","Programming Contest","Coding Marathon","All Night Coding","Code Wars","Scholarship Test"]
for(i=0;i<tags.length;i++){
    king_tags.innerHTML += `<p class='text-center rounded py-1 px-1' id='tag_${i}' style='background-color:#eeeeee; font-size:15px;'>${tags[i]}</p>`;
}
var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var alleventslink = document.querySelector('#alleventslink');
var codingeventslink = document.querySelector('#codingeventslink');
var webinarslink = document.querySelector('#webinarslink');
var bootcamplink = document.querySelector('#bootcamplink');
var workshoplink = document.querySelector('#workshoplink');

var allupcoming = document.querySelector('.all1');
var allarchive = document.querySelector('.all2');
var allatf = document.querySelector('.all3');


const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const pages = document.querySelector('#page_count');

var webinarupcoming = document.querySelector('.webinar1');
var webinararchive = document.querySelector('.webinar2');
var webinaratf = document.querySelector('.webinar3');

var bcupcoming = document.querySelector('.bc1');
var bcarchive = document.querySelector('.bc2');
var bcatf = document.querySelector('.bc3');

var workupcoming = document.querySelector('.work1');
var workarchive = document.querySelector('.work2');
var workatf = document.querySelector('.work3');

var ceupcoming = document.querySelector('.ce1');
var cearchive = document.querySelector('.ce2');
var ceatf = document.querySelector('.ce3');

var card_tag = "";

var row = document.querySelector('#content-row');

var defaultimg = '../../static/images/default.png';

var allupcoming_offset = 0;
var allarchived_offset = 0;
var allatf_offset = 0;

apiCall_without_tags('ALL_EVENTS','Upcoming',allupcoming_offset);

var webinarupcoming_offset = 0;
var webinararchive_offset = 0;
var webinaratf_offset = 0;

var ceupcoming_offset = 0;
var cearchive_offset = 0;
var ceatf_offset = 0;

var bcupcoming_offset = 0;
var bcarchive_offset = 0;
var bcatf_offset = 0;

var workupcoming_offset = 0;
var workarchive_offset = 0;
var workatf_offset = 0;


console.log('Hi there!');


alleventslink.addEventListener('click', (event)=>{
    event.preventDefault();
    apiCall_without_tags('ALL_EVENTS','Upcoming',allupcoming_offset);
});

if(alleventslink.classList.contains('active')){
    allupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('ALL_EVENTS','Upcoming',allupcoming_offset);
    });
    
    allarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('ALL_EVENTS','Archived',allarchived_offset);
    });
    allatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('ALL_EVENTS','All Time Favorites',allatf_offset);
    });
}

codingeventslink.addEventListener("click",(event)=>{
    event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Upcoming',ceupcoming_offset);
        ceupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Upcoming',ceupcoming_offset);
    });
    cearchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Archived',cearchive_offset);
    });
    ceatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','All Time Favorites',ceatf_offset);
    });
});
if(codingeventslink.classList.contains('active')){
    ceupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Upcoming',ceupcoming_offset);
    });
    cearchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Archived',cearchive_offset);
    });
    ceatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','All Time Favorites',ceatf_offset);
    });
}

webinarslink.addEventListener('click', (event)=>{
    event.preventDefault();
    apiCall_without_tags('WEBINAR','Upcoming',webinarupcoming_offset);
    webinarupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','Upcoming',webinarupcoming_offset);
    });
    webinararchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','Archived',webinararchive_offset);
    });
    webinaratf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','All Time Favorites',webinaratf_offset);
    });
});

if(webinarslink.classList.contains('active')){
    webinarupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','Upcoming',webinarupcoming_offset);
    });
    webinararchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','Archived',webinararchive_offset);
    });
    webinaratf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','All Time Favorites', webinaratf_offset);
    });
}

bootcamplink.addEventListener('click', (event)=>{
    event.preventDefault();
    apiCall_without_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_offset);
    bcupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_offset);
    });
    bcarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','Archived',bcarchive_offset);
    });
    bcatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','All Time Favorites',bcatf_offset);
    });
});

if(bootcamplink.classList.contains('active')){
    bcupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_offset);
    });
    bcarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','Archived',bcarchive_offset);
    });
    bcatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','All Time Favorites',bcatf_offset);
    });
}


workshoplink.addEventListener('click', (event)=>{
    event.preventDefault();
    apiCall_without_tags('WORKSHOP','Upcoming',workupcoming_offset);
    workupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','Upcoming',workupcoming_offset);
    });
    workarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','Archived',workarchive_offset);
    });
    workatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','All Time Favorites',workatf_offset);
    });
});

if(workshoplink.classList.contains('active')){
    workupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','Upcoming',workupcoming_offset);
    });
    workarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','Archived',workarchive_offset);
    });
    workatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','All Time Favorites',workatf_offset);
    });
}  


function apiCall_without_tags(category, subcategory, offset){
    if(offset !== 0){
        prev.disabled = false;
    }
    else{
        prev.disabled = true;
    }
    fetch(`https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subcategory}&tag_list=&offset=${offset}`)
        .then(response => response.json())        
        .then(data => {
            if(data.data.events.length === 0){
                row.innerHTML = "";
                row.innerHTML = `
                <div class='container'>
                    <div class='row align-items-center mt-5'>
                        <div class='col-12 text-center'>
                            <h1 class='text-danger'>No events found!</h1>
                        </div>
                    </div>
                </div>`;
            }
            else{
                row.innerHTML = "";
                for(i=0;i<data.data.events.length;i++){
                    row.innerHTML += `
                    <div class="col-md-6 mb-3">
                        <div class="card shadow rounded card_link">
                            <img src='${data.data.events[i].mobile_cover_picture !== null ? data.data.events[i].mobile_cover_picture : "../../static/images/blank.jpg"}' alt='${data.data.events[i].name}' class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${data.data.events[i].name}</h5>
                                <div class="row mb-3" style="border-bottom:solid 1px lightgrey;">
                                    <div class="col-4">
                                        <p class="text-muted mb-0 def_size">Starts on</p>
                                        <p class="val_size mb-1">${new Date((data.data.events[i].event_start_time)*1000).getHours() > 12 ? new Date((data.data.events[i].event_start_time)*1000).getHours()-12 : new Date((data.data.events[i].event_start_time)*1000).getHours() !== 0 ? new Date((data.data.events[i].event_start_time)*1000).getHours() : 12}:${new Date((data.data.events[i].event_start_time)*1000).getMinutes() === 0 ? "00" : new Date((data.data.events[i].event_start_time)*1000).getMinutes()} ${new Date((data.data.events[i].event_start_time)*1000).getHours() > 12 ? "PM" : "AM"}, ${new Date((data.data.events[i].event_start_time)*1000).getDate()} ${monthNames[new Date((data.data.events[i].event_start_time)*1000).getMonth()]} ${new Date((data.data.events[i].event_start_time)*1000).getFullYear()}</p>
                                    </div>
                                    <div class="col-4">
                                        <p class="text-muted mb-0 def_size">Entry Fee</p>
                                        <p class="val_size mb-1">${data.data.events[i].fees !== 0 ? data.data.events[i].currency+" "+data.data.events[i].fees: "Free"} </p>
                                    </div>
                                    <div class="col-4">
                                        <p class="text-muted mb-0 def_size">Venue</p>
                                        <p class="val_size mb-1">${data.data.events[i].venue}</p>
                                    </div>
                                </div>
                                <p class="card-text event_description val_size text-muted">${data.data.events[i].short_desc}</p>
                                <div class="card-text">
                                    <div class="row">
                                        ${data.data.events[i].card_tags.slice(0,3).map(tag => `<div class="col-auto bg-secondary text-light mb-2 mx-2 px-2 py-1" style="font-size:12px; border-radius:2px;">${tag}</div>`).join("")}
                                    </div>
                                </div>
                                <p style="color:#fa7328;">${data.data.events[i].card_tags.slice(3,).length !== 0 ? "+"+data.data.events[i].card_tags.slice(3,).length+" more" :""}</p>
                                <br>
                                <hr>
                                <div class="row align-items-center">
                                    <div class='col-7'>
                                        <div class='row'>
                                            ${data.data.events[i].registered_users.top_users.map(user => "<div class='col-1 mx-0'><img src="+ (user.image_url !== null ? user.image_url : defaultimg) +" width='24' height='24' title="+ user.name +" class='rounded-circle'></div>").join("")}
                                        </div>
                                        ${data.data.events[i].registered_users.other_users_count !== 0 & data.data.events[i].registered_users.top_users.length !== 0 ? `<p class='def_size'>and <strong>${data.data.events[i].registered_users.other_users_count}</strong> others registered</p>`: ""}
                                    </div>
                                    <div class='col-auto px-0 pb-0' id='register_box'>
                                        <img src='../../static/images/register.png' width='123.217' height='30'>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>`
                // console.log(data.data.events);
                    pages.innerHTML = '';
                    pages.innerHTML = `<p>page <span><input type='text' class='text-center' id='page_input' name='page_input' style='width:50px;height=38px;' value='${(offset/20)+1}'></span> of ${data.data.page_count}</p>`;
                    if((offset/20)+1 === data.data.page_count){
                        next.disabled = true;    
                    }
                    else{
                        next.disabled = false;
                    }
                }
            }
        })
        .catch(error => console.log(error));
}

next.addEventListener('click', (event) => {
    event.preventDefault();
    if(allupcoming.classList.contains('active')){
        allupcoming_offset += 20;
        apiCall_without_tags('ALL_EVENTS','Upcoming',allupcoming_offset);
    }
    if(allarchive.classList.contains('active')){
        allarchived_offset += 20;
        apiCall_without_tags('ALL_EVENTS','Archived',allarchived_offset);
    }
    if(allatf.classList.contains('active')){
        allatf_offset += 20;
        apiCall_without_tags('ALL_EVENTS','All Time Favorites',allatf_offset);
    }
    if(webinarupcoming.classList.contains('active')){
        webinarupcoming_offset += 20;
        apiCall_without_tags('WEBINAR','Upcoming',webinarupcoming_offset);
    }
    if(webinararchive.classList.contains('active')){
        webinararchive_offset += 20;
        apiCall_without_tags('WEBINAR','Archived',webinararchive_offset);
    }
    if(webinaratf.classList.contains('active')){
        webinaratf_offset += 20;
        apiCall_without_tags('WEBINAR','All Time Favorites',webinaratf_offset);
    }
    if(ceupcoming.classList.contains('active')){
        ceupcoming_offset += 20;
        apiCall_without_tags('CODING_EVENT','Upcoming', ceupcoming_offset);
    }
    if(cearchive.classList.contains('active')){
        cearchive_offset += 20;
        apiCall_without_tags('CODING_EVENT','Archived', cearchive_offset);
    }
    if(ceatf.classList.contains('active')){
        ceatf_offset += 20;
        apiCall_without_tags('CODING_EVENT','All Time Favorites', ceatf_offset);
    }
    if(bcupcoming.classList.contains('active')){
        bcupcoming_offset += 20;
        apiCall_without_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_offset);
    }
    if(bcarchive.classList.contains('active')){
        bcarchive_offset += 20;
        apiCall_without_tags('BOOTCAMP_EVENT','Archived',bcarchive_offset);
    }
    if(bcatf.classList.contains('active')){
        bcatf_offset += 20;
        apiCall_without_tags('BOOTCAMP_EVENT','All Time Favorites',bcatf_offset);
    }
    if(workupcoming.classList.contains('active')){
        workupcoming_offset += 20;
        apiCall_without_tags('WORKSHOP','Upcoming',workupcoming_offset);
    }
    if(workarchive.classList.contains('active')){
        workarchive_offset += 20;
        apiCall_without_tags('WORKSHOP','Archived',workarchive_offset);
    }
    if(workatf.classList.contains('active')){
        workatf_offset += 20;
        apiCall_without_tags('WORKSHOP','All Time Favorites',workatf_offset);
    }
});
prev.addEventListener('click',(event)=>{
    event.preventDefault();
    if(allupcoming.classList.contains('active')){
        allupcoming_offset -= 20;
        apiCall_without_tags('ALL_EVENTS','Upcoming',allupcoming_offset);
    }
    if(allarchive.classList.contains('active')){
        allarchived_offset -= 20;
        apiCall_without_tags('ALL_EVENTS','Archived',allarchived_offset);
    }
    if(allatf.classList.contains('active')){
        allatf_offset -= 20;
        apiCall_without_tags('ALL_EVENTS','All Time Favorites',allatf_offset);
    }
    if(webinarupcoming.classList.contains('active')){
        webinarupcoming_offset -= 20;
        apiCall_without_tags('WEBINAR','Upcoming',webinarupcoming_offset);
    }
    if(webinararchive.classList.contains('active')){
        webinararchive_offset -= 20;
        apiCall_without_tags('WEBINAR','Archived',webinararchive_offset);
    }
    if(webinaratf.classList.contains('active')){
        webinaratf_offset -= 20;
        apiCall_without_tags('WEBINAR','All Time Favorites',webinaratf_offset);
    }
    if(ceupcoming.classList.contains('active')){
        ceupcoming_offset -= 20;
        apiCall_without_tags('CODING_EVENT','Upcoming', ceupcoming_offset);
    }
    if(cearchive.classList.contains('active')){
        cearchive_offset -= 20;
        apiCall_without_tags('CODING_EVENT','Archived', cearchive_offset);
    }
    if(ceatf.classList.contains('active')){
        ceatf_offset -= 20;
        apiCall_without_tags('CODING_EVENT','All Time Favorites', ceatf_offset);
    }
    if(bcupcoming.classList.contains('active')){
        bcupcoming_offset -= 20;
        apiCall_without_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_offset);
    }
    if(bcarchive.classList.contains('active')){
        bcarchive_offset -= 20;
        apiCall_without_tags('BOOTCAMP_EVENT','Archived',bcarchive_offset);
    }
    if(bcatf.classList.contains('active')){
        bcatf_offset -= 20;
        apiCall_without_tags('BOOTCAMP_EVENT','All Time Favorites',bcatf_offset);
    }        
    if(workupcoming.classList.contains('active')){
        workupcoming_offset -= 20;
        apiCall_without_tags('WORKSHOP','Upcoming',workupcoming_offset);
    }
    if(workarchive.classList.contains('active')){
        workarchive_offset -= 20;
        apiCall_without_tags('WORKSHOP','Archived',workarchive_offset);
    }
    if(workatf.classList.contains('active')){
        workatf_offset -= 20;
        apiCall_without_tags('WORKSHOP','All Time Favorites',workatf_offset);
    }
});
