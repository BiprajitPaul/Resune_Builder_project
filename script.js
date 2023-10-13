function addNewWeField(){
    // console.log("Ading new field");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder" , 'Another')
    newNode.setAttribute('rows', 3);
    newNode.classList.add('bgt');

    let weOb = document.querySelector("#we");
    let weAddButtonOb = document.querySelector("#weAddbutton");

    weOb.insertBefore(newNode,weAddButtonOb);

}
function addNewaqField(){
    let newNode2 = document.createElement('textarea');
    newNode2.classList.add('form-control');
    newNode2.classList.add('aqField');
    newNode2.classList.add('mt-2');
    newNode2.setAttribute("placeholder" , 'Another')
    newNode2.setAttribute('rows', 3);
    newNode2.classList.add('bgt');

    let weOb = document.querySelector("#aq");
    let aqAddButtonOb = document.querySelector("#aqAddbutton");

    weOb.insertBefore(newNode2,aqAddButtonOb);
}


// Generating CV
function generateCV(){
    let nameField = document.querySelector('#nameField').value;
    let nameT1 = document.querySelector('#nameT1');
    nameT1.innerHTML= nameField;
    // direct
    document.querySelector('#nameT2').innerHTML = nameField;
    // contact
    let contactField = document.querySelector('#contactField').value;
    document.querySelector('#contactT').innerHTML = contactField;
    // address
    let addressField = document.querySelector('#addressField').value;
    document.querySelector('#addressT').innerHTML = addressField;
    // Linkes

    let fbField = document.querySelector('#fbField').value;
    document.querySelector('#fbT').href = fbField;
    let linedinField = document.querySelector('#linkedinField').value;
    document.querySelector('#linkedinT').href = fbField;
    let githubField = document.querySelector('#githubField').value;
    document.querySelector('#githubT').href = githubField;

    // Objective
    document.querySelector('#objectiveT').innerHTML = document.querySelector('#objectiveField').value;
    // WorkExperince


    // let wx =document.getElementsByClassName('weField');
                        // or
    let wex = document.querySelectorAll('.weField');

    let strr1= "";
    for(let e of wex){
        strr1 = strr1 + `<li> ${e.value} </li>`;

    }
    document.querySelector('#weT').innerHTML = strr1;
    // academic Qualification

    let aqx = document.querySelectorAll('.aqField');
    let strr2 = "";
    for(let e of aqx){
        strr2 = strr2 + `<li> ${e.value} </li>`;

    }
    document.querySelector('#aqT').innerHTML = strr2;
    // Code for Profile Photo
    let file = document.getElementById('imgField').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    // set the image in template
    reader.onloadend= function(){
        document.getElementById('imgT').src = reader.result;
    };

    document.getElementById('cv-form').style.display = 'none';
    document.body.style.backgroundColor = "white";
    document.getElementById('cv-template').style.display = 'block';

}


function printCV(){
    window.print();
}