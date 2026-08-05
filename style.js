const input = document.getElementById('input');
const displayButton = document.getElementById('displayButton');
const output = document.getElementById('output');
displayButton.addEventListener('click', function(){
    if(input.value.trim() === ''){
        alert("入力値が空です。");
    }else{
        output.textContent = input.value;
        output.classList.toggle('highlight');
}});

const colorButton = document.getElementById('colorButton');
const colors = ["lightblue", "lightgreen", "lightcoral"];
let index = 0;
colorButton.addEventListener('click', function(){
    document.body.style.backgroundColor = colors[index];
    index++;
    if(index >= colors.length){
        index = 0;
    }
});

const addButton = document.getElementById('addButton');
const table = document.getElementById('table');
const rowCount = document.getElementById('rowCount');
let count = 0;
addButton.addEventListener('click', function(){
    if(input.value.trim() ===''){
        return;
    }
    const row = table.insertRow();
    const textCell = row.insertCell(0);
    const actionCell = row.insertCell(1);
    textCell.textContent = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', function(){
        row.remove();
        count--;
        rowCount.textContent = count + '件';
        if(count<3){
            displayButton.style.display = 'inline-block';
        }
    });
    actionCell.appendChild(deleteButton);
    count++;
    rowCount.textContent = count + '件';
    input.value = '';
    const input = document.getElementById('input');
    if (table.rows.length > 4) { 
    table.rows[1].remove(); 
    count--;
    rowCount.textContent = count + '件';
    }
    if (count >= 3) {
        displayButton.style.display = 'none';
    }

})
for(let i = 1; i <= 5; i++){
    console.log(i);
}