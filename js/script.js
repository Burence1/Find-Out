function getName() {

  var date = new Date(document.querySelector('input[type="date"]').value)

  var male = (document.querySelector('input[type="radio"]').value)
  var female = (document.querySelector('input[type="radio"]').value)
   gender = ''
  
  if (gender == 'male'){
    gender = 'male'
  }
  else {
    gender = 'female'
  }
  console.log(date,gender)
  var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  
  var dayOfWeek = date.getDay();
  //var date = new Date();
  //date.setDate(date.getDate());

  var name ='';
  if (gender == 'male'){
    name = maleNames[dayOfWeek];
  }
  else {
    name = femaleNames[dayOfWeek];
  }
  console.log('NAME IS ', name)
   return name
  
}
// $(document).ready(function(){
//       var date_input=$('input[name="date"]');
//       var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
//       var options={
//     format: 'mm/dd/yyyy',
//         container: container,
//         todayHighlight: true,
//         autoclose: true,
//       };
//       date_input.datepicker(options);
//     })

// document.getElementById("#").innerHTML = maleNames;
// document.getElementById("#").innerHTML = femaleNames;

  
