// let getData = async () =>{
//     //get data from server
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // gan response = fetch , fetch goi len server lay du lieu
//     let json = await response.json(); // chuyen doi sang kieu json
//     console.log(json); 
// }

// getData();

//c1
function createRow (data){
    let newRow = document.createElement('tr');
    for ( let j = 1 ; j < 4; j++){
        let newCell = document.createElement('td'); //tao moi td
        let content ;
       
        if ( j === 1 ){
            content = document.createTextNode(data.id);
        }
        else if ( j === 2){
            content = document.createTextNode(data.name);
        }
        else {
            content = document.createTextNode(data.email);   
        }
        newCell.appendChild(content); // tao duoc 1 cell co data
        newRow.appendChild(newCell);  
    }
    return newRow; // đưa data ra bên ngoài hàm
}

async function getData(url){
    //get data from server 
    let x = await fetch(url); // gan response = fetch , fetch goi len server 
    let user = await x.json(); // chuyen doi sang kieu json
    let tableUser = document.getElementById('table-user');

    //fill data into table
    for ( let i = 0; i < user.length; i++){
        let Row = createRow(user[i]); // khai báo 1 biến để hứng data
        tableUser.appendChild(Row);  // ko nen quang vao ham function vi rac roi
    }
    

    //CREATE BUTTON NEW
    let btnNew = document.getElementById("btn-new");
    let count = user.length; // de tang ID + 1
    btnNew.addEventListener('click', () =>{ //addEventListener : ham su kien // () =>{} giống function(){}
        count += 1; // de tang ID + 1
        let User ={
            id : count,
            name: 'Tram',
            email: 'tram@gmail.com'
        };

        user.push(User);
        
        let Row = createRow(User); // khai báo 1 biến để hứng data
        tableUser.appendChild(Row);
        //add new data row 
    }); // thêm sự kiện s

    //REMOVE BUTTON
    let btnRemove = document.getElementById('btn-remove');
    btnRemove.addEventListener('click', () =>{
        // alert('click');
        // user.splice(user.length - 1, 1);
        // console.log(user);

        tableUser.deleteRow(-1); // -1 xoá từ dưới lên // 0 xoá từ trên xuống
    });
} 

getData('https://jsonplaceholder.typicode.com/users');

//c2
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json()) // then = await
// .then(json => console.log(json))

//ngay8th5
//let h1 = document.getElementById("sayhi");

// doi chu o the h1 sang chuoi string innerHTML
// let h1 = document.getElementById("sayhi");
// h1.innerHTML = " chuc mung nam moi "; 

//cách 1: thêm 1 thẻ mới theo id 
// let body = document.getElementById('body');
// let h3 = '<h3 style="color:purple">DAY LA THE MOI</h3>';
// body.innerHTML += h3 ;

//cách 2 : thêm 1 thẻ mới dùng array
// let body = document.getElementsByTagName('body');
// console.log(body[0]);
// let h3 = '<h3 style="color:purple">DAY LA THE MOI</h3>';
// body[0].innerHTML += h3 ;

//remove
// let h1 = document.getElementById("sayhi");
// h1.remove();


