const listOfNeighbours = [ ["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"], ];

for(let i=0; i< listOfNeighbours.length; i++){
    let row =  listOfNeighbours[i];
     //console.log(`the row is ${listOfNeighbours[i]}`);
    for(let j = 0 ; j< row.length; j++){
        console.log(`neighbour: ${row[j]}`);
    }
    
}