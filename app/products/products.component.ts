import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productsList?:any = [];
  errorMessage:string = "";
  addingProduct:boolean = false;

  newTitle:string = '';
  newDescription:string = '';
  newCategory:string = '';

  editingIndex: number | null = null;

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

  addProduct() {
    this.addingProduct = true;
  }

  onSubmitAddProduct() {
    if(!this.newTitle || !this.newDescription || !this.newCategory) {
      alert('You must fill out all fields');
    }

    const newProduct = {
      title: this.newTitle,
      description: this.newDescription,
      category: this.newCategory
    }

    this.productsList.push(newProduct);
  }

  onCancelAddProduct() {
    this.addingProduct = false;
  }

  onUpdate(productIndex:number) {
    this.editingIndex = productIndex;
    console.log(this.editingIndex);
  }

  updateProduct(productIndex:number) {
    if(!this.newTitle || !this.newDescription || !this.newCategory) {
      alert('You must fill out all fields');
    }
    const product = this.productsList[productIndex];
    product.title = this.newTitle;
    product.description = this.newDescription;
    product.category = this.newCategory;
  }

  closeEditing() {
    this.editingIndex = null;
  }
}
