let propname = 'c';
const rank = {
    a: 1,
    b: 2,
    [propname]: 3,
};

console.log(rank.c);


let LAST_NAME = "lastname";
let fullname = {
    firstname: "Soumya",
    [LAST_NAME]: "jain",
}

console.log("My full name is: " + fullname.firstname + " " + fullname.lastname);
