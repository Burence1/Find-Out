/*declaring the getName function with no parameters*/
function getName() {

  var date = new Date(document.querySelector('input[type="date"]').value);
  var maleChecked = document.getElementById('male').checked;
  
    console.log(male);
   gender = ''
  /*using control flow to input data fom radio buttons*/
  if (maleChecked){
    gender = 'male'
  }else {
    gender = 'female'
  }
  console.log(date,gender)
  /*putting Akan names in Arrays*/
  var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
      /*getting birthdate and manipulating it*/
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