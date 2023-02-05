import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
constructor(private ar:ActivatedRoute , private ps:ProductserviceService ,private router:Router){}
delid:any
ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
  this.delid=data["id"]
    
  })
  this.ps.delete(this.delid).subscribe((res=>{
    alert("product deleted")
    this.router.navigateByUrl("product")
  }))
}
}
