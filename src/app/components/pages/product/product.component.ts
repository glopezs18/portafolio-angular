import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsProduct } from 'src/app/interfaces/details-product.interface';
import { ProductosService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producto: DetailsProduct;
  id: string;

  constructor( private route: ActivatedRoute, 
               public productoService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params
        .subscribe( parametros => {
          // console.log(parametros['id']);          
          this.productoService.getProduct(parametros['id'])
              .subscribe((producto: any) => {  
                this.id = parametros['id'];                              
                this.producto = producto;
              });
        });
  }

}
