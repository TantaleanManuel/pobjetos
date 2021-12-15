const _private 0 new WeakMap()



// nombre de la clase mayusculas
// instancia de Book


 class Book{
    constructor(title,autor,precio){
 //   this._title=title;
 //   this._autor=autor;
 //   this._precio=precio;

// creacion de objeto y propiedades
 const properties = {
    _title: title,
    _autor: autor,
    _precio: precio,
    }


    _private.set(this, {properties});
    }
}
class Seller{

}


 // instancia de Book
 const book1= new Book1("1984", "G.O", 359);
 const book2= new Book1("Frankenstein", "M.S", 200);
 
 console.log(book1._title);
 console.log(book1._autor);
 console.log(book1._precio);




