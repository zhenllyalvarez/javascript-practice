// const arrData = [];
// let allData = document.querySelector('.table');

// function storeData() {
//     let inputData = document.querySelector('.inputElement');
//     let alldata = '';

//     const data = inputData.value;
//     for(let i = 0; i < arrData.length; i++) {
//         let data = arrData[i];
//         const htmlTable = `<tr>${data}</tr>`;
//         alldata += htmlTable;
//     }

//     console.log(alldata);
//     arrData.push(data);

//     console.log(arrData);
//     allData.innerHTML = arrData;
// }
const arrData = [];
storeData();

function storeData() {
    let alldata = '';

        for(let i = 0; i < arrData.length; i++) {
            const todo = arrData[i];
            const htmlTable = `<p>${todo}</p>`;
            alldata += htmlTable;
        }
    
    document.querySelector('.table').innerHTML = alldata;
}


function addTodo() {
    let inputData = document.querySelector('.inputElement');

    if(inputData.value) {
        const data = inputData.value;

        arrData.push(data);
        console.log(arrData);
    
        inputData.value = '';
    } else {
        alert('Empty input field!');
    }


    storeData();
}