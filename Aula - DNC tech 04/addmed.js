const meds=[];

function addmed() {
    event.preventDefault();
    const newmed={
        name: document.getElementById("name").value; 
        qnt: document.getElementById("qnt").value;
        class: document.getElementById("class").value
    };
    meds.push(newmed);

}

function renderTable() {

    const table = document.getElementById("table");
    
}
