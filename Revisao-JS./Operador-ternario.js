let grade = 6.7

let situation 

//if(grade >= 6) situation = 'Aprovado'
//else situation = 'Reprovado'
 
situation = grade >= 6 ? 'Aprovado' : 'Reprovado'
    
console.log({grade, situation})

let user = 'root'
let msg

msg = (user === 'root' || user === 'admin' ? 'SuperUser' : 'NormalUser')
console.log({user, msg})