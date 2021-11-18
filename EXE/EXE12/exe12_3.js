const school = {
    teachers: [{
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };

//    const findPerson = (type,id) =>{
//        let obj = {}
//        if(type === 'students'){
//            obj = school.students.find(student => student.id === id);
//        }
//        else{
//            obj= school.teachers.find(teacher => teacher.id === id);
//        }
//        return obj

//    };

   const findPerson =(arr, id) =>{
       let witchArr = arr === "students" ? school.students: school.teachers;
       return witchArr.find((item) => {
          return item.id === id})
   }
 console.log(findPerson("students",12));
  
  
   // A method called “assignStudent” that takes two
// arguments, a student’s id and a subject
// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.

   const assignStudent =  (id, subject ) =>{
      let pickstudent = findPerson("studendt",id);
      let wicheTicher = school.teachers.find((itemTeacher)=>{
       return   itemTeacher.subjects.find((itemSubject)=>{
           return   itemSubject.subjects === subject;
          });
      });
      wicheTicher.students.push(pickstudent);
      if(wicheTicher.capacityLeft>0){
          wicheTicher.capacityLeft--;
      }
      else{
          console.log('no avilable teachers left');
      }
   };

   const assignTecherStudent =(teacherId, newSubject)=>{
       let teacher = findPerson('teachers', teacherId);
       console.log(teacher);
       let isSubject = teacher.subjects.find(subject => subject.subjects === newSubject);
       if(!isSubject)
       teacher.subjects.push(newSubject);
   }


