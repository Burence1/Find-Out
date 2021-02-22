function getName() {

  var date = new Date(document.querySelector('input[type="date"]').value);
  var maleChecked = document.getElementById('male').checked;
  
  console.log(male)
   gender = ''
  
  if (maleChecked){
    gender = 'male'
  }else {
    gender = 'female'
  }
  console.log(date,gender)
  var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
      
  var dayOfWeek = date.getDay();
  var name ='';
  if (gender == 'male'){
    name = maleNames[dayOfWeek];
  }
else {
    name = femaleNames[dayOfWeek];
  }
  console.log('NAME IS ', name)
  document.getElementById("out").value = name;
  
}  