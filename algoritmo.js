 exports.banquete = function banquete (persons){
   if(isNaN(persons)){
        console.log("ingrese un dato valido")
   } else {
        if (persons>300){
            var total = persons*75
        } else if (persons>=200 && persons <=299) {
            var total = persons*85 
        }else {
            var total = persons*95
        }

   return total 
   }
  
}
 