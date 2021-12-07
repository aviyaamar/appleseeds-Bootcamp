const obj = {
  name: 'aviya',
  logName: function(){
      console.log(this.name);
      
  },
 
}
obj.logName();
setTimeout(obj.logName.bind(obj), 1000)

