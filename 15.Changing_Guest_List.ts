let Guest_List:string[]=['Ali','Khubaib','Samar'];
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] +  ',\n\n It Is Our Pleasure To Invite YOU In Our Party.\n\nThank You !\n')
}

let absent_guest : string = 'Ali';

let new_guest : string = 'Zaid';

Guest_List[0]=new_guest;
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] +  ',\n\n It Is Our Pleasure To Invite YOU In Our Party.\n\nThank You !\n')
}

console.log(` Mr. ${absent_guest} is not coming to the party.`)