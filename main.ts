

let magician : string[] =['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumdore'];

function make_great(magicianArry:string[]){

      for(let i=0; i<magicianArry.length; i++){

         magician[i] = 'the Great' + magicianArry[i]
      }
}

function show_magician(magician:string[]){

   magician.forEach(element =>{
      console.log(element);
   })
}

make_great(magician);
show_magician(magician);