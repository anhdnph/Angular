import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../../services/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }
  categoryId: string = this.route.snapshot.paramMap.get('category-id') ;
  productId: string = this.route.snapshot.paramMap.get('id') ;
  url = `${this.categoryId}/products/${this.productId}`
  productForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
      ]),
    image: new FormControl('',[
      Validators.required
      ]),
    price: new FormControl('',[
      Validators.required
      ]),
    detail: new FormControl(''),
    amount: new FormControl(''),
    status: new FormControl('')
  });
  get name() {return this.productForm.get('name')}
  get image() {return this.productForm.get('image')}
  get price() {return this.productForm.get('price')}
  ngOnInit() {
    this.getProduct() ;
  }
  getProduct() {
    this.productService.getProduct(this.url).subscribe(data => {
      this.productForm = new FormGroup({
        id: new FormControl(this.productId),
        categoryId: new FormControl(this.categoryId),
        name: new FormControl(data.name),
        image: new FormControl(data.image),
        price: new FormControl(data.price),
        detail: new FormControl(data.detail),
        amount: new FormControl(data.amount),
        status: new FormControl(data.status)
      }) ;
    }) ;
  }
  updateProduct() {
    if(this.productForm.valid){
    this.productService.updateProduct(this.url, this.productForm.value).subscribe(data => {
      this.router.navigate([`${this.categoryId}/products`]) ;
    }) ;
  }
}
}
