import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { errorContext } from 'rxjs/internal/util/errorContext';


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productsList?:any = [];
  errorMessage = "";
  
  constructor(private productService: ProductService){

  }

  ngOnInit():void {
    this.productService.getProducts().subscribe({
      next: (data:any) => {
        console.log('Data:', data)
        this.productsList = data.products;
      },
      error: (err) => {
        console.error('Error:', err)
        this.errorMessage = 'Error: '+err.message;
      },
      complete: () => console.log('Completed')
  });
  }
}
