document.addEventListener('DOMContentLoaded', async() => {
    const response = await fetch('/products');
    const data = await response.json();
    displayTable(data);

    function displayTable(products) {
        const productsTableBody = document.querySelector('#productTable tbody')
        products.forEach((product) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><button>담기</button></td>
            ` 
            productsTableBody.appendChild(row);
            //버튼에 이벤트 넣어라
        });
    }   
});