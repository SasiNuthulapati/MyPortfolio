
function scrollToProjects(){
document.getElementById("projects").scrollIntoView({behavior:'smooth'})
}

function openModal(src){
let modal=document.getElementById("modal")
let img=document.getElementById("modalImg")
img.src=src
modal.style.display="flex"
}

function closeModal(){
document.getElementById("modal").style.display="none"
}
