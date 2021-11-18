import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoProduct } from '../interfaces/info-products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  products: any[] = [];

  productosFiltrado: any[] = [];

  constructor( private http: HttpClient ) { 
    this.getProducts();
   }

  private getProducts(){
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-fe454-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) =>{      
        this.products = resp;
        // this.cargando = false;
        
        setTimeout(() =>{
          this.cargando = false;
          resolve(this.products);
        }, 2000);           
      });
    });    
  }

  getProduct( id: string){
    return this.http.get(`https://angular-html-fe454-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }

  searchProduct( param: string ){
    if(this.products.length == 0){
      this.getProducts().then( () => {
        //Aplicar filtro despues de cargar productos
        this.filterProducts( param );
      })
    } else {
      this.filterProducts( param );
    }
    
  }

  private filterProducts(param: string){    
    this.productosFiltrado = [];

    param = param.toLocaleLowerCase();

    this.products.forEach( prod => {
      const titulolower = prod.titulo.toLocaleLowerCase();

      if( prod.categoria.indexOf( param ) >=0 || titulolower.indexOf( param ) >= 0 ){
        this.productosFiltrado.push( prod );
      }
    }); 
  }
}
