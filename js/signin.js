//get database username + password

function login (arr) {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", () =>{
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    for ( let i = 0 ; i < arr.length ; i++){
        if (name === arr [i].username && pass === arr[i].password){
            alert("dung");
          return true; //bo qua tat ca
        }
        else {
            continue;
        }
    }
    alert("thua");
    });
}

let getData = async () =>{
    //get data from server
    let data = await fetch('sshttps://5ed1024f4e6d7200163a045c.mockapi.io/api/c4e/users?fbclid=IwAR2mRKJwKlj9eQDFVTIkustHHQUaXO9mkidsGKbKca4Mr9njzgO0h1E2teA'); // gan response = fetch , fetch goi len server lay du lieu
    let data1 = await data.json(); // chuyen doi sang kieu json
    login(data1);
}
getData();

// function validateform ( arr ) {
//     console.log(arr);
//     let ps = "1234";
//     let us = "Nguyenhuungoctram";
//     if ( name === us && pass === ps ){
//         let pass1 = pass.toLowerCase() === ps.toLowerCase(); //check ki tu hoa thuong
//         alert("dung");
//         window.location.href = "https://www.sourcetreeapp.com/";
//     }
//     else {
//         alert("thua");
//     }
// }
// submit.addEventListener("click", validateform);