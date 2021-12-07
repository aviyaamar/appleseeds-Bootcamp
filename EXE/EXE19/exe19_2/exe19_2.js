const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

    let ol = document.createElement('ol');


    users.forEach((el)=>{
        let li=document.createElement("li");
        let getFullName = `${el.firstName} ${el.lastName}`;
        li.textContent= getFullName;
        ol.append(li);
       
    })
    
    const list = document.querySelector(".list");
    list.append(ol);
    console.dir(ol);

    ol.style.listStyleType='none';

    let allId  = document.querySelectorAll('li');
    allId.forEach((element, index)=>{
     let li =   element.setAttribute('data-id', users[index].id);
        console.log(li)
    });

    
   