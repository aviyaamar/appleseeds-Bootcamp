const isPassword  = (password ) =>{

    if(password.length >= 7){
        console.log('Strong');
    }
    else{
        console.log('weak');
    }

};
console.log(isPassword('12345679'));
console.log(isPassword('123'));
console.log(isPassword('123456'));


const isPasswordTeranry = (password)=> {
     return password.length >=7 ? 'Strong' : 'Weak';

};
console.log(isPasswordTeranry('1234567910'));
console.log(isPasswordTeranry('123'));

const isPasswordLogical = (password)=>{
    return (password.length > 7 && 'Strong' )|| 'Weak';
  
};
console.log(isPasswordLogical('1234567910'));
console.log(isPasswordLogical('123'));


const isPasswordConditional = (password) =>{
   let reg = /[A-Z]/;
 return  password.length>=7 ? reg.test(password) ? 'very Strong': 'Strong' : 'Weak';
 
};
console.log(isPasswordConditional('A124567e90'));
console.log(isPasswordConditional('4679854930'));
console.log(isPasswordConditional('ldkd'));