alert();
let w = [1,2,3,4,5,6,7,8,9,10,11]
let x = 1;
let xa = 2;
let xb = 3;
let xc = 4;
let xd = 5;
let xe = 6;
let xf = 7;
let xg = 8;
let xh = 9;
let xi = 10;
let xj = 11;
 let z = prompt("un nombre svp dans" +w);
 let zEnNombre= parseInt(z);
let str =' ';

let positionZero= z.charAt(0);

console.log(x + "le type de x :" + typeof(x)+ 
'\n z contient' + z + 'type pour z ' + typeof(z) +
'\ntype de str '+ typeof(str)
);
// let y = 0 ;
// let html;
// if( x == zEnNombre ||z == xa||z ==xb || z ==xc ||z ==xd ||z ==xe ||z==xf||z==xg||z==xh||z==xi ||z==xj){
//     function direTuAsCompris(){
//         alert("j ai bien mis le nombre " + z);
//     }
//     direTuAsCompris();
//     while(y < z){
// // html=document.getElementsByTagName("span").innerHTML=("y contient la valeur "+z);z--;
//         console.log("y contient ma valeur de" + z);
//        z--;
//         // alert('x contient m valeur de ' + x)
//         // x++;
//     }
    
// } else if (zEnNombre != w && typeof(zEnNombre) != typeof(str)){
//     alert(':( mettez un nombre svp si vous voulez continuer car ' + zEnNombre +' ne se trouve dans  intervalle');

// }

// else if(typeof(z) === typeof(str)){
//     alert('on ne boucle pas sur le chaine de caractere '
//  + z +  '!!! merci de choisir un nombre dans' +w);
// }

// else{
// alert("on ne parvent à comprendre ce vous avez mis");

// }

if(zEnNombre >=2 ){
 function direTuAsCompris(){
    alert(" j'ai bien mis le nombre " + zEnNombre);

 }
 direTuAsCompris();
 for (let i =2 ;zEnNombre >= i; zEnNombre--)
 console.log('Z contient la valeur de ' + zEnNombre);

}
else if(typeof(zEnNombre) !== typeof(str)){
    alert('on ne boucle pas sur le chaine de caractere '
     + z +  '!!! merci de choisir un nombre ' )
}
else{
    alert("on ne comprends pas qu est ce qur vous voulez dire!!!")
}

let d = new Date();
let dy = d.getFullYear();
let demo = document.getElementById("demo").innerHTML = "c est fait à " + d+ "et l annee est : "+ dy;

let caracEnMajuscule = positionZero.toUpperCase();
let affim =document.getElementById("span");
 affim.innerHTML = "premier caractere rentre en majuscule est :" +caracEnMajuscule ;


 console.log(positionZero);
 let note = prompt("donnez ta donne de la derniere devoir d'algo ");
      let noteEnNombre =parseInt(note);
 console.log(note + 'type de note ' + typeof(note) + 
 "\n noteEnNombre" + typeof(noteEnNombre));
 console.log(typeof(noteEnNombre));

  switch(noteEnNombre){
    case 12:
      document.getElementById('demo1').innerHTML = "vous devez augmentez d'effort";

        break;
        case 10:
         document.getElementById('demo1').innerHTML =" vous avez juste la moyenne mieux vous vous reveillez";
            
           break;
            case 19:
             document.getElementById('demo1').innerHTML = " vous suivez au moins bravo";    
    default: 
    document.getElementById('demo1').innerHTML = "pas de message pour la note " +noteEnNombre;    
            }

            //FONCTIONS AUTO INVOQUES
            (function(x){
                x = prompt("entrez un nombre");
                alert('carre de '+ x + ' est  '+ x*x);
            })();

         