


//definición de la clase y sus propiedades
class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//interfaz interactua con html, acá estan los metodos
class UI{
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
            <strong>Product:</strong> ${product.name}
            <strong>Product pirce:</strong> ${product.price}
            <strong>Product year:</strong> ${product.year}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>`;
        productList.appendChild(element);
        
       
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name === "delete"){
            //Para saber cual es el elemento padre que hay que eliminar
           element.parentElement.parentElement.parentElement.remove();
        }
    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        //mostrar el dom en pantalla
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);

    }
}

//eventos del dom
document.getElementById('product-form').
addEventListener('submit',function(e){
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value

    const product = new Product(name, price, year)

    //nueva instancia de la clase ui para agregar un producto
   const ui =  new UI();
   ui.addProduct(product);
   ui.resetForm();
   ui.showMessage('Product Added Succesfully', 'Success')





    //cancela comportamiento por defento de la pagina
    e.preventDefault();
} )

document.getElementById('product-list').addEventListener('click', function (e){
    const ui = new UI();
    ui.deleteProduct(e.target)
   
})