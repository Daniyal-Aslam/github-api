const form = document.getElementById('search-form');
var mainBox = document.querySelector('.card-content');
var bioBox = document.querySelector('.card'); 
var avatar = document.querySelector('.card img');
var bio = document.querySelector('.card p');
var username = document.querySelector('.card h2');
var github = document.getElementById('github-acc');
var followers = document.getElementById('followers');
var locate = document.getElementById('location');
var website = document.getElementById('website');
var url; 
form.addEventListener('submit',e=>{
    e.preventDefault();  
    var overlay= document.createElement('div');
    overlay.setAttribute('class','overlay');  
    overlay.innerHTML='<i class="fa-brands fa-github"></i>';
    mainBox.appendChild(overlay); 
    setTimeout(() => {
      overlay.style.display="none";
    },2000)
    var input = document.getElementById('type-search').value 
    var name = input.split(' ').join('-') 
    fetch('https://api.github.com/users/'+name)
    .then((response)=>response.json())
    .then((data)=>{
       avatar.setAttribute('src',`${data.avatar_url}`);
    // USER WEBSITE URL 
       website.setAttribute('href',`${data.blog}`);
       website.innerHTML=`${data.blog}`
    //    Github account
    github.innerHTML=`https://github.com/${data.login}`
    github.setAttribute('href',`https://github.com/${data.login}`);
    //  USER  GITHUB NAME
    username.innerHTML=`${data.name}`
    // Followers 
    followers.innerHTML=`${data.followers}`
    // USER LOCATION
    locate.innerHTML=`${data.location}`
       console.log(data);
    //    USER BIO 
    bio.innerHTML=`${data.bio}`
    })
    mainBox.appendChild(bioBox);
})
// LIST ITEMS 
// // SAVE INFO
// var save = document.querySelector('.theme-btn-save');
// save.addEventListener('click',e=>{
//     e.preventDefault();
//     mainBox.appendChild=`${ bioBox}`;
//     alert('saved');
// })