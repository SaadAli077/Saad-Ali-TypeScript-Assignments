let Guest_List:string[]=['Ali','Khubaib','Samar'];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] +  ',\n\n It Is Our Pleasure To Invite YOU In Our Party.\n\nThank You !\n')
// }

let absent_guest : string = 'Ali';

let new_guest : string = 'Zaid';

Guest_List[0]=new_guest;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] +  ',\n\n It Is Our Pleasure To Invite YOU In Our Party.\n\nThank You !\n')
}

console.log(` Mr. ${absent_guest} is not coming to the party.`);

console.log('Good News ! We find a big table so we are inviting 3 more guests to the party.')

Guest_List.unshift( 'Tayyab' );
Guest_List.splice( 2 , 0,  'Haider' );
Guest_List.push(' Subhan');

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] +  ',\n\n It Is Our Pleasure To Invite YOU In Our Party.\n\nThank You !\n')
}