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

//array mein 3 guest add kiye hai.

Guest_List.unshift( 'Tayyab' );
Guest_List.splice( 2 , 0,  'Haider' );
Guest_List.push(' Subhan');

// yaha par meny 6 guest k array ko print karwaya hai.

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] +  ',\n\n It Is Our Pleasure To Invite YOU In Our Party.\n\nThank You !\n')
}

// sorry message to guest for not inviting.

console.log('\n sorry we cannot arrange big table,soo only two people will be invited.');

// yaha par meny guest remove kiye hai.

while(Guest_List.length > 2 ){
    let remove_Guest = Guest_List.pop()
    console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner. `)
}
// hamare remainig 2 guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] +  ',\n\n you are still invited.\n\nThank You !\n')
}

// meny sary guest array sy remove kr diye.
Guest_List.splice(0,2);
console.log(Guest_List);