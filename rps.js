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
const arrData = JSON.parse(localStorage.getItem('todos')) || [];
console.log(arrData);
storeData();

function storeData() {
    let alldata = '';

        for(let i = 0; i < arrData.length; i++) {
            const todo = arrData[i];
            const htmlTable = `
            <table>
                <tr>
                    <td>${todo}<button class="button" onclick="removeData(${i}); storeData();">Delete</button></td>
                </tr>
            </table>`;
            alldata += htmlTable;
        }
    
    document.querySelector('.table').innerHTML = alldata;
    localStorage.setItem('todos', JSON.stringify(arrData));
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

function removeData(index) {
    arrData.splice(index, 1);
    storeData();
}