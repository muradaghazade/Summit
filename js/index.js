function sendInfo(){
    var params = {
        fullname: document.getElementById('fullname').value,
        company: document.getElementById('company').value,
        emailad: document.getElementById('emailad').value
    };

    const serviceID = 'service_lsw2n1e';
    const templateID = 'template_vl8gf39';

    emailjs.send(serviceID, templateID, params)
    .then(
        res =>{
            document.getElementById('fullname').value= '';
            document.getElementById('company').value= '';
            document.getElementById('emailad').value= '';
            console.log(res);
            alert('Your informations sent successfully')
        }
    )
    .catch((err) => console.log(err));
}