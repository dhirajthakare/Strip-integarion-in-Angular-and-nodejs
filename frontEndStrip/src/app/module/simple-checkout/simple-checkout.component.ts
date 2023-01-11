import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/service/shared.service';

@Component({
  selector: 'app-simple-checkout',
  templateUrl: './simple-checkout.component.html',
  styleUrls: ['./simple-checkout.component.css'],
})
export class SimpleCheckoutComponent implements OnInit {
  constructor(private service:SharedService) {}

  ngOnInit(): void {}

  buyProduct: any = [
    { productId: 1, qty: 3 },
    { productId: 2, qty: 8 },
  ];

  checkOut() {
    this.service.getCheckoutLink(this.buyProduct).subscribe((res:any)=>{
      console.log(res);
      window.location = res.url;
    })
  }
}
