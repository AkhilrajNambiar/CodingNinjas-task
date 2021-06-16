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

console.log('Hi there!');

if(alleventslink.classList.contains('active')){
    allupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log('Something fishy');
        fetch("https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Upcoming&tag_list=&offset=0")
        .then(response => response.json())
        .then(data => {
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
            }
            // console.log(data.data.events);
        })
        .catch(error => console.log("ERROR"));
    });
  
    allarchive.addEventListener("click", (event)=>{
        event.preventDefault();
        fetch("https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Archived&tag_list=&offset=0")
        .then(response => response.json())
        .then(data => {
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
            }
        })
        .catch(error => console.log("ERROR"))
    });
    allatf.addEventListener("click", (event)=>{
        event.preventDefault();
        fetch("https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=All Time Favorites&tag_list=&offset=0")
        .then(response => response.json())
        .then(data => {
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
            }
        })
        .catch(error => console.log('ERROR'));
    });
}

codingeventslink.addEventListener("click",(event)=>{
    event.preventDefault();
    event.preventDefault();
    ceupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        fetch("https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Upcoming&tag_list=&offset=0")
        .then(response => response.json())        
        .then(data => {
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
            }
        })
        .catch(error => console.log(error));
    });
    cearchive.addEventListener("click", (event)=>{
        event.preventDefault();
        fetch("https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Archived&tag_list=&offset=0")
        .then(response => response.json())        
        .then(data => {
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
            }
        })
        .catch(error => console.log(error));        
    });
    ceatf.addEventListener("click", (event)=>{
        event.preventDefault();
        fetch("https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=All Time Favorites&tag_list=&offset=0")
        .then(response => response.json())        
        .then(data => {
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
            }
        })
        .catch(error => console.log(error));
    });
});
if(codingeventslink.classList.contains('active')){
    event.preventDefault();
    ceupcoming.addEventListener("click", (event)=>{
        event.preventDefault();
        fetch("https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Upcoming&tag_list=&offset=0")
        .then(response => response.json())        
        .then(data => {
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
            }
        })
        .catch(error => console.log(error));
    });
    cearchive.addEventListener("click", (event)=>{
        event.preventDefault();
        fetch("https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Archived&tag_list=&offset=0")
        .then(response => response.json())        
        .then(data => {
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
            }
        })
        .catch(error => console.log(error));        
    });
    ceatf.addEventListener("click", (event)=>{
        event.preventDefault();
        fetch("https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=All Time Favorites&tag_list=&offset=0")
        .then(response => response.json())        
        .then(data => {
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
            }
        })
        .catch(error => console.log(error));
    });
}

// webinarslink.addEventListener("click", ()=>{
//     webinarupcoming.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Upcoming', true);
//     });
//     webinararchive.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Archived', true);
//     });
//     webinaratf.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=All Time Favorites', true);
//     });
// });

// bootcamplink.addEventListener("click", ()=>{
//     bcupcoming.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=BOOTCAMP_EVENT&event_sub_category=Upcoming', true);
//     });
//     bcarchive.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=BOOTCAMP_EVENT&event_sub_category=Archived', true);
//     });
//     bcatf.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=BOOTCAMP_EVENT&event_sub_category=All Time Favorites', true);
//     });
// });

// workshoplink.addEventListener("click", ()=>{
//     workupcoming.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=WORKSHOP&event_sub_category=Upcoming', true);
//     });
//     workarchive.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=WORKSHOP&event_sub_category=Archived', true);
//     });
//     workatf.addEventListener("click", ()=>{
//         req.open('GET', 'https://api.codingninjas.com/api/v3/events?event_category=WORKSHOP&event_sub_category=All Time Favorites', true);
//     });
// });


