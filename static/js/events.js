var king_tags = document.querySelector('#king_tags');

var tags = ["Interview Preparation","Contest Solutions","Competitive Programming","Futuristic Tech","Coding Concepts","Career Guidance","Web Development","Android","Machine Learning","Campus Event","Online Coding Event","Hackathon","Women Who Code","GSoC","Placement","Aptitude Preparation","Efficient Coding","Programming Contest","Coding Marathon","All Night Coding","Code Wars","Scholarship Test"]


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

const next_tagged = document.querySelector('#next_tagged');
const prev_tagged = document.querySelector('#prev_tagged');

function check_if_clicked(){
    var vip = document.querySelectorAll('*[id^="tag_"]');
    var checker = false;
    for(i=0;i<vip.length;i++){
        if(vip[i].style.color === 'white'){
            console.log('Kaamm kar guud');
            checker = true;
        }
    }
    return checker;
}

function filter_by_tags(category, subcategory, offset, string){
    console.log(`${category} ka ${subcategory}`);
    king_tags.innerHTML = '';
    for(i=0;i<tags.length;i++){
        king_tags.innerHTML += `<p class='text-center rounded py-1 px-1' id='tag_${i}' style='background-color:#eeeeee; font-size:15px;'>${tags[i]}</p>`;
    }
    var n = tags.length;
    for(i=0;i<10;i++){
        document.getElementById(`tag_${(n-1)-i}`).style.display = 'none';
    }
    king_tags.innerHTML += '<a id="allTagExpander">See 10 more tags</a>';

    document.querySelector('#allTagExpander').addEventListener('click',event=>{
        event.preventDefault();
        for(i=0;i<10;i++){
            document.getElementById(`tag_${(n-1)-i}`).style.display = 'block';
        }
        document.getElementById('allTagExpander').style.display = 'none';
    });

    var filters = document.querySelectorAll('*[id^="tag_"]');
    filters.forEach(element =>{
        element.addEventListener('click',(event)=>{
            event.preventDefault();
            if(element.style.color !== 'white'){
                element.style.background = '#fa7328';
                element.style.color = 'white';
                string += element.textContent+',';
                next_tagged.style.display = 'block';
                prev_tagged.style.display = 'block';
                next.style.display = 'none';
                prev.style.display = 'none';
                offset = 0;
            }
            else{
                element.style.background = '#eeeeee';
                element.style.color = 'black';
                rambo = string.replace(element.textContent+',', '');
                string = rambo;
                if(check_if_clicked() === false){
                    next.style.display = 'block';
                    prev.style.display = 'block';
                    next_tagged.style.display = 'none';
                    prev_tagged.style.display = 'none';
                        if(category === 'ALL_EVENTS' && subcategory === 'Upcoming'){
                            allupcoming_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                            console.log('All ka upcoming');
                        }
                        if(category === 'ALL_EVENTS' && subcategory === 'Archived'){
                            allarchived_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                            console.log('All ka archived');
                        }
                        if(category === 'ALL_EVENTS' && subcategory === 'All Time Favorites'){
                            allatf_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                            console.log('All ka alltimefav');
                        }
                        if(category === 'WEBINAR' && subcategory === 'Upcoming'){
                            webinarupcoming_offset = 0;
                            apiCall_without_tags('WEBINAR','Upcoming',0);
                            apiCall_with_tags('WEBINAR', 'Upcoming',0,'');
                            console.log('webinar ka upcoming');
                        }
                        if(category === 'WEBINAR' && subcategory === 'Archived'){
                            webinararchive_offset = 0;
                            apiCall_without_tags('WEBINAR','Archived',0);
                            apiCall_with_tags('WEBINAR', 'Archived',0,'');
                            console.log('webinar ka archive');
                        }
                        if(category === 'WEBINAR' && subcategory === 'All Time Favorites'){
                            webinaratf_offset = 0;
                            apiCall_without_tags('WEBINAR','All Time Favorites',0);
                            apiCall_with_tags('WEBINAR', 'All Time Favorites',0,'');
                            console.log('webinar ka alltimefav');
                        }
                        if(category === 'CODING_EVENT' && subcategory === 'Upcoming'){
                            ceupcoming_offset = 0;
                            apiCall_without_tags('CODING_EVENT','Upcoming',0);
                            apiCall_with_tags('CODING_EVENT', 'Upcoming',0,'');
                            console.log('coding ka upcoming');
                        }
                        if(category === 'CODING_EVENT' && subcategory === 'Archived'){
                            cearchive_offset = 0;
                            apiCall_without_tags('CODING_EVENT','Archived',0);
                            apiCall_with_tags('CODING_EVENT', 'Archived',0,'');
                            console.log('coding ka archive');
                        }
                        if(category === 'CODING_EVENT' && subcategory === 'All Time Favorites'){
                            ceatf_offset = 0;
                            apiCall_without_tags('CODING_EVENT','All Time Favorites',0);
                            apiCall_with_tags('CODING_EVENT', 'All Time Favorites',0,'');
                            console.log('coding ka alltimefav');
                        }
                        if(category === 'BOOTCAMP_EVENT' && subcategory === 'Upcoming'){
                            bcupcoming_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                        }
                        if(category === 'BOOTCAMP_EVENT' && subcategory === 'Archived'){
                            bcarchive_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                        }
                        if(category === 'BOOTCAMP_EVENT' && subcategory === 'All Time Favorites'){
                            bcatf_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                        }
                        if(category === 'WORKSHOP' && subcategory === 'Upcoming'){
                            workupcoming_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                        }
                        if(category === 'WORKSHOP' && subcategory === 'Archived'){
                            workarchive_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                        }
                        if(category === 'WORKSHOP' && subcategory === 'All Time Favorites'){
                            workatf_offset = 0;
                            apiCall_without_tags(category,subcategory,0);
                            apiCall_with_tags(category, subcategory,0,'');
                        }
                }
            }
            // finale = string.lastIndexOf(',')
            // console.log(string.slice(0,finale));
            apiCall_with_tags(category, subcategory, offset, string);
        });
    });
    next_tagged.addEventListener('click',(event)=>{
        event.preventDefault();
        offset += 20;
        apiCall_with_tags(category, subcategory, offset, string);
    });
    prev_tagged.addEventListener('click',(event)=>{
        event.preventDefault();
        offset -= 20;
        apiCall_with_tags(category, subcategory, offset, string);
    });
}

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

var allupcoming_tags_offset = 0;
var allarchived_tags_offset = 0;
var allatf_tags_offset = 0;

apiCall_without_tags('ALL_EVENTS','Upcoming',allupcoming_offset);
filter_by_tags('ALL_EVENTS','Upcoming',0,'');

var webinarupcoming_offset = 0;
var webinararchive_offset = 0;
var webinaratf_offset = 0;

var webinarupcoming_tags_offset = 0;
var webinararchive_tags_offset = 0;
var webinaratf_tags_offset = 0;

var ceupcoming_offset = 0;
var cearchive_offset = 0;
var ceatf_offset = 0;

var ceupcoming_tags_offset = 0;
var cearchive_tags_offset = 0;
var ceatf_tags_offset = 0;

var bcupcoming_offset = 0;
var bcarchive_offset = 0;
var bcatf_offset = 0;

var bcupcoming_tags_offset = 0;
var bcarchive_tags_offset = 0;
var bcatf_tags_offset = 0;

var workupcoming_offset = 0;
var workarchive_offset = 0;
var workatf_offset = 0;

var workupcoming_tags_offset = 0;
var workarchive_tags_offset = 0;
var workatf_tags_offset = 0;


// console.log('Hi there!');

alleventslink.addEventListener('click', (event)=>{
    event.preventDefault();
    apiCall_without_tags('ALL_EVENTS','Upcoming',allupcoming_offset);
});

if(alleventslink.classList.contains('active')){
    allupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('ALL_EVENTS','Upcoming',allupcoming_offset);
        filter_by_tags('ALL_EVENTS','Upcoming',allupcoming_tags_offset,'');
    });
    allarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('ALL_EVENTS','Archived',allarchived_offset);
        filter_by_tags('ALL_EVENTS','Archived',allarchived_tags_offset,'');
    });
    allatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('ALL_EVENTS','All Time Favorites',allatf_offset);
        filter_by_tags('ALL_EVENTS','All Time Favorites',allatf_tags_offset,'');
    });
}

codingeventslink.addEventListener("click",(event)=>{
    ceupcoming_offset = 0;
    event.preventDefault();
    apiCall_without_tags('CODING_EVENT','Upcoming',ceupcoming_offset);
    ceupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Upcoming',ceupcoming_offset);
        filter_by_tags('CODING_EVENT','Upcoming',ceupcoming_tags_offset,'');
    });
    cearchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Archived',cearchive_offset);
        filter_by_tags('CODING_EVENT','Archived',cearchive_tags_offset,'');
    });
    ceatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','All Time Favorites',ceatf_offset);
        filter_by_tags('CODING_EVENT','All Time Favorites',ceatf_tags_offset,'');
    });
});
if(codingeventslink.classList.contains('active')){
    ceupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Upcoming',ceupcoming_offset);
        filter_by_tags('CODING_EVENT','Upcoming',ceupcoming_tags_offset,'');
    });
    cearchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','Archived',cearchive_offset);
        filter_by_tags('CODING_EVENT','Archived',cearchive_tags_offset,'');
    });
    ceatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('CODING_EVENT','All Time Favorites',ceatf_offset);
        filter_by_tags('CODING_EVENT','All Time Favorites',ceatf_tags_offset,'');
    });
}

webinarslink.addEventListener('click', (event)=>{
    webinarupcoming_offset = 0;
    event.preventDefault();
    apiCall_without_tags('WEBINAR','Upcoming',webinarupcoming_offset);
    webinarupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','Upcoming',webinarupcoming_offset);
        filter_by_tags('WEBINAR','Upcoming',webinarupcoming_tags_offset,'');
    });
    webinararchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','Archived',webinararchive_offset);
        filter_by_tags('WEBINAR','Archived',webinararchive_tags_offset,'');
    });
    webinaratf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','All Time Favorites',webinaratf_offset);
        filter_by_tags('WEBINAR','All Time Favorites',webinaratf_tags_offset,'');
    });
});

if(webinarslink.classList.contains('active')){
    webinarupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','Upcoming',webinarupcoming_offset);
        filter_by_tags('WEBINAR','Upcoming',webinarupcoming_tags_offset,'');
    });
    webinararchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','Archived',webinararchive_offset);
        filter_by_tags('WEBINAR','Archived',webinararchive_tags_offset,'');
    });
    webinaratf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WEBINAR','All Time Favorites', webinaratf_offset);
        filter_by_tags('WEBINAR','All Time Favorites',webinaratf_tags_offset,'');
    });
}

bootcamplink.addEventListener('click', (event)=>{
    bcupcoming_offset = 0;
    event.preventDefault();
    apiCall_without_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_offset);
    bcupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_offset);
        filter_by_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_tags_offset,'');
    });
    bcarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','Archived',bcarchive_offset);
        filter_by_tags('BOOTCAMP_EVENT','Archived',bcarchive_tags_offset,'');
    });
    bcatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','All Time Favorites',bcatf_offset);
        filter_by_tags('BOOTCAMP_EVENT','All Time Favorites',bcatf_tags_offset,'');
    });
});

if(bootcamplink.classList.contains('active')){
    bcupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_offset);
        filter_by_tags('BOOTCAMP_EVENT','Upcoming',bcupcoming_tags_offset,'');
    });
    bcarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','Archived',bcarchive_offset);
        filter_by_tags('BOOTCAMP_EVENT','Archived',bcarchive_tags_offset,'');
    });
    bcatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('BOOTCAMP_EVENT','All Time Favorites',bcatf_offset);
        filter_by_tags('BOOTCAMP_EVENT','All Time Favorites',bcatf_tags_offset,'');
    });
}


workshoplink.addEventListener('click', (event)=>{
    workupcoming_offset = 0;
    event.preventDefault();
    apiCall_without_tags('WORKSHOP','Upcoming',workupcoming_offset);
    workupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','Upcoming',workupcoming_offset);
        filter_by_tags('WORKSHOP','Upcoming',workupcoming_tags_offset,'');
    });
    workarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','Archived',workarchive_offset);
        filter_by_tags('WORKSHOP','Archived',workarchive_tags_offset,'');
    });
    workatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','All Time Favorites',workatf_offset);
        filter_by_tags('WORKSHOP','All Time Favorites',workatf_tags_offset,'');
    });
});

if(workshoplink.classList.contains('active')){
    workupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','Upcoming',workupcoming_offset);
        filter_by_tags('WORKSHOP','Upcoming',workupcoming_tags_offset,'');
    });
    workarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','Archived',workarchive_offset);
        filter_by_tags('WORKSHOP','Archived',workarchive_tags_offset,'');
    });
    workatf.addEventListener("click", (event)=>{
        event.preventDefault();
        apiCall_without_tags('WORKSHOP','All Time Favorites',workatf_offset);
        filter_by_tags('WORKSHOP','All Time Favorites',workatf_tags_offset,'');
    });
}  

function apiCall_with_tags(category, subcategory, offset, tag_list){
    if(offset !== 0){
        prev_tagged.disabled = false;
    }
    else{
        prev_tagged.disabled = true;
    }
    fetch(`https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subcategory}&tag_list=${tag_list}&offset=${offset}`)
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
                            <img width='430' height='160' src='${data.data.events[i].mobile_cover_picture !== null ? data.data.events[i].mobile_cover_picture : "../../static/images/blank.jpg"}' alt='${data.data.events[i].name}' class="card-img-top">
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
                }
                pages.innerHTML = '';
                pages.innerHTML = `<p>page ${(offset/20)+1} of ${data.data.page_count}</p>`;
                if((offset/20)+1 === data.data.page_count){
                    next_tagged.disabled = true;    
                }
                else{
                    next_tagged.disabled = false;
                }
            }
        })
        .catch(error => console.log(error));
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
                            <img width='430' height='160' src='${data.data.events[i].mobile_cover_picture !== null ? data.data.events[i].mobile_cover_picture : "../../static/images/blank.jpg"}' alt='${data.data.events[i].name}' class="card-img-top">
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
                }
                pages.innerHTML = '';
                pages.innerHTML = `<p>page ${(offset/20)+1} of ${data.data.page_count}</p>`;
                if((offset/20)+1 === data.data.page_count){
                    next.disabled = true;    
                }
                else{
                    next.disabled = false;
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

