const user = [
    {
        firstname: "aviya",
        lastname: "hazan",
        age: 27,
    },
    {
        firstname: "israel",
        lastname: "hazan",
        age: 29,
    },
    {
        firstname: "shirel",
        lastname: "amar",
        age: 26,
    },
];
const extractOnlyValue = (arr, key)=>{
    return arr.reduce((prev, curr)=>{
       prev.push(curr[key]);
      return prev;
            

    },[])
}
console.log( extractOnlyValue(user, "firstname"));


const countOnlyVowels =(str) =>{
    let newStr = str.split('');
    return newStr.reduce((prev,curr)=>{
        if(curr==='a'|| curr==='e'|| curr==='i'||curr==='o'||curr==='u'){
            if(prev[curr]) prev[curr]++;
            else  prev[curr]=1;
        }
            return prev;

    },{});
};
console.log(countOnlyVowels('aviya'));

const addKeyAndValue =(arrObj, key, value)=>{
    return arrObj.reduce((prev, curr)=>{
        curr[key] =value;
        prev.push(curr);
        return prev;
    },[])
}
let arr =[{aviya:'hi'},{israel: 'by'}]
console.log(addKeyAndValue(arr, 'aaa', 'bbb'));