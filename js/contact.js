function sendMail(){
    // alert(2)
    var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      organization: document.getElementById('organization').value,
      role: document.getElementById('role').value,
      message: document.getElementById('message').value
    };
  
  const serviceID = 'service_4wkg9wm';
  const templateID = 'template_hli1z25';
//   alert(3);

  emailjs.send(serviceID,templateID,params)
  .then(
    res =>{
      document.getElementById('name').value= '';
      document.getElementById('email').value= '';
      document.getElementById('organization').value= '';
      document.getElementById('role').value= '';
      document.getElementById('message').value= '';
      console.log(res);
      alert('Your informations sent successfully')
    }
  )
  .catch((err) => console.log(err));
//   alert(4);
  }