const formSubmit = document.querySelector(".form-submit");

const validateForm = () =>{

    let f = document.forms["contact-form"].elements;
    let cansubmit = false;

    for (let i = 0; i < f.length; i++) {
        if(f[i].type === "text"){
            if (f[i].value.length !== 0) {
                cansubmit = true
            }else{
                cansubmit = false;
            };
        }
    }

    if (cansubmit) {
        formSubmit.disabled = false;
    }else {
        formSubmit.disabled = true;
    }

}


formSubmit.addEventListener("click", (event)=>{

    event.preventDefault();

    const subjectValue = document.getElementById("subject").value;
    const messageValue = document.getElementById("message").value;

    window.location.href = `mailto:mks10685@gmail.com?subject=${subjectValue}&body=${messageValue}`
})



