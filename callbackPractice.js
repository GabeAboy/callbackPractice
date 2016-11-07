/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first

  function first(arr,cb) {

    var fn = arr[0];
    cb(fn);
  }
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName);

});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
function last(arr,cd) {
  var last = arr[arr.length-1];
  cd(last);
}
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(one,two,cn) {
  var mult = one*two;
  cn(mult);
}
multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130

*/





  //Code Here for contains
function contains(names,name,cv) {
  for (var i = 0; i < names.length; i++) {
    if(names[i]===name)cv(true);
    else cv(false);
  }

}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM
function uniq(names,cx) {
  names.sort();
  var str = names.join(" ");//.toLowerCase();
  names = str.split(" ");

  for (var i = 0; i < names.length; i++) {
    if(names[i]==names[i+1])names.splice(i,1);
  }
  cx(names);
}
*/
function uniq(array, cb) {
     var arr = [];
     array.forEach(function(item) {
       if(arr.indexOf(item) === -1) {
         arr.push(item);
       }
     });
     return cb(arr);
   }

uniq(names, function(uniqArr){
 console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

//var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
    //Code Here for uniq

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
function each(names,ct) {
    for (var i = 0; i < names.length; i++) {
      ct(names[i],names[i].indexOf());
    }

}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
// console.log(users[0].id);
function getUserById(users,str,cp) {
  //search array for str
  //return it
  for (var i = 0; i < users.length; i++) {
    if(users[i].id===str){
      cp(users[i]);
    }
  }


}

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
