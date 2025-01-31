document.getElementById("contact-form").addEventListener("submit", function (event){
    event.preventDefault();

    /* Las variables son un lugar de almacenamiento en donde se guarda un valor*/

    const serviceId = "";
    const templateId = "";
    const apikey = "";

    emailjs.sendForm(serviceId,templateId,this,apikey).then((result)=>{
        console.log(result.text); /* imprime en la consola */
        this.reset();

        
    })

})