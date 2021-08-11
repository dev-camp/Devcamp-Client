/*!
  *Devcamp UI Functionalities:

  This file contain every ui components functionality. Do not touch this file if no reasonable functionality is been added
  
*/

function log(val){
    return console.log(val)
}

/*
    Profile Page Functionality
*/

/**
 * @TODO
 * -Toggle Tab functionality ✔
 * -Profile card menu toggle ✔
 * -Post menu toggle (copy link or delete post or share post) ✔
 * -Toggle User-nav-menu ✔
 */

addEventListener("load", ()=>{
    tabToggle()
    toggleProfileCardMenu()
    togglePostMenu()
    toggleUserNav()
})

// Global variables




// Tab functionality
function tabToggle(){
    let userBioCont = document.querySelector(".user-bio-cont");
    let tabButtons = document.querySelectorAll(".tab-button > .btn");
    let portfolioCont = document.querySelector(".portfolio-cont");
    tabButtons.forEach((btn)=>{
        btn.onclick = (e)=>{
            let curr = document.querySelectorAll(".active");
            if(curr.length > 0){
                curr[0].className = curr[0].className.replace("active", "")
            }
            
            e.target.classList.add("active")
            if(e.target.classList.contains("about-btn")){
                portfolioCont.style.display = "none"
                userBioCont.style.display = "block"
                
            }
            else if(e.target.classList.contains("portfolio-btn")){
                portfolioCont.style.display = "flex"
                userBioCont.style.display = "none"
            }
        }
    })
}

// Profile card menu toggle
function toggleProfileCardMenu(){

    let PCM = document.querySelector(".profile-card-menu");
    let PMC = document.querySelector(".profile-more-cont");
    let isVisible = false;
    PCM.onclick = (e)=>{
        if(isVisible == false){
            PMC.style.display = "block"
            isVisible = true;
        }
        else if(isVisible == true){
            PMC.style.display = "none"
            isVisible = false;
        }
    }
}

// Post menu toggle
function togglePostMenu(){
    let postMenu = document.querySelectorAll(".post-menu");
    let show = false;
    if(postMenu.length > 1){
        postMenu.forEach((menu)=>{
            menu.onclick = (e)=>{
                let postMenuCont = e.target.parentElement.querySelector(".post-info-cont");

                log(postMenuCont)

                if(show == false){
                    postMenuCont.style.display = "block";
                    show = true;
                }
                else if(show == true){
                    postMenuCont.style.display = "none";
                    show = false;
                }
            }
        })
    }
}

// Toggle user-nav-menu
function toggleUserNav(){
    let userImg = document.querySelector(".user-nav-img");
    let userNav = document.querySelector(".user-nav")
    let isVisible = false
    userImg.onclick = ()=>{
        if(isVisible == false){
            userNav.style.display = "block"
            isVisible = true;
        }
        else if(isVisible == true){
            userNav.style.display = "none"
            isVisible = false;
        }
    }
}