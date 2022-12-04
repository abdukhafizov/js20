// let mail = prompt("enail")
function Email(name, surname, numbers) {
    let arr = [name, surname, numbers]
    let gmail = ""
    let gmail2 = ""
    let gmail3 = ""
   
    for (item of arr) {
        if (arr) {
            gmail = name + surname + numbers + '@gmail.com';
            gmail2 = surname + name + numbers + '@yahoo.com';
            gmail3 = name + surname + numbers + '@yandex.com';
            console.log( gmail.toLowerCase(), gmail2.toLowerCase(), gmail3.toLowerCase()
            );
        }
    }
}

 let generator = "1234567890123152345345";

Email('Botir', 'Juraev',    Math.floor(Math.random() * generator.length))
Email('Oleg', 'Olegov', Math.floor(Math.random() * generator.length))





function randomId(yourId){
    let text = "";
    let generator = "qwerty1234567890";
  
    for (let i = 0; i < yourId; i++)
      text += generator.charAt(Math.floor(Math.random() * generator.length ));
   return text;
  }
  
 alert('your ID is '+randomId(5))