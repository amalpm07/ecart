import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
constructor(private fb:FormBuilder , private ps:ProductserviceService , private router:Router){}

addProductForm=this.fb.group({
  id:[''],
  productName:[''],
  categoryId:[''],
  discription:[''],
  price:[''],
  isAvailable:[''],
  productImage:[''],
  rating:[''],
  reviews:[''],
  warrenty:['']
})
ngOnInit():void{

}
addNewProduct(){
  let newProduct={
    id:this.addProductForm.value.id,
    productName:this.addProductForm.value.productName,
    categoryId:this.addProductForm.value.categoryId,
    discription:this.addProductForm.value.discription,
    price:this.addProductForm.value.price,
    isAvailable:this.addProductForm.value.isAvailable,
    productImage:this.addProductForm.value.productImage,
    rating:this.addProductForm.value.rating,
    review:this.addProductForm.value.reviews,
    warrenty:this.addProductForm.value.warrenty
  }
  this.ps.addProduct(newProduct).subscribe((item:any)=>{
    alert('product added')
    this.router.navigateByUrl('product')
  })
}
}
