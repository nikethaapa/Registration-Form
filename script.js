const form=document.getElementById("form")
const uname=document.getElementById("name")
const email=document.getElementById("email")
const pass=document.getElementById("password")

form.addEventListener("submit",function(e){
    
    if(!validinp()){
        e.preventDefault()
    }
})

function validinp(){
    const nameval=uname.value.trim()
    const emaillval=email.value.trim()
    const passval=pass.value.trim()
    let success=true

    //name
    if(nameval===""){
        success=false
        setError(uname,"Name is required")
    }
    else{
        setSuc(uname)
    }

    //email
    const emailpat= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emaillval===""){
        success=false
        setError(email,"Email is required")
    }
    else if(!emailpat.test(emaillval)){
        success=false
        setError(email,"Invalid email format")
    }
    else{
        setSuc(email)
    }

    //password
    if(passval === ""){
        success = false
        setError(pass,"Password is required")
    }
    else if(passval.length<6){
        success=false
        setError(pass,"Password must be at least 6 characters")
    }
    else{
        setSuc(pass)
    }
   
    return success;
}

// requried msg for error
function setError(element,message){
    const inputgrp=element.parentElement;//eg ele is password parent and go to error
    const errele=inputgrp.querySelector(".error")

    errele.innerText=message;
    inputgrp.classList.add("error")
    inputgrp.classList.remove("success")
}
//show success
function setSuc(element){
    const inputgrp=element.parentElement;//eg ele is password parent and go to error
    const errele=inputgrp.querySelector(".error")

    errele.innerText='';
    inputgrp.classList.add("success")
    inputgrp.classList.remove("error")
}
