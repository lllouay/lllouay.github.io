let count = 1;
function publishToTable() {
    const name = document.getElementById('name').value;
    const price= document.getElementById('price').value;
    const error = document.getElementById('error');
    const regex = /^[a-z]+$/i;
    error.innerHTML = (!name || !price) ? 'Name & Price both values are required.' : '';
    if (regex.test(name) && Number.isInteger(parseInt(price)) && count <= 5) {
        count++;
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const nameEle = document.createElement('td');
        const priceEle = document.createElement('td');
        nameEle.innerHTML = name;
        priceEle.innerHTML = price;
        trElement.appendChild(nameEle);
        trElement.appendChild(priceEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    } else if(count > 5) {
        confirm("All tables reserved!");
        error.innerHTML = 'Tables invalid';
    } else {
        error.innerHTML = 'Please enter a valid name and integer price.';
        confirm("Input Error!!");
    }
}