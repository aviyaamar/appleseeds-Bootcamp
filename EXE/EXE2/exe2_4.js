let getFullDate = () =>{
    let d = new Date();
    const [day, year] = [ d.getDate(), d.getFullYear()];
    const dayName = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()]
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"][new Date().getMonth()]  ;
    
    return `today is a ${dayName} the ${day} of ${monthNames} ,${year} `;
}
let date = getFullDate();
console.log(date);
