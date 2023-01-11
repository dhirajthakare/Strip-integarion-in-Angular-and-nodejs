import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/service/shared.service';

@Component({
  selector: 'app-buy-policy',
  templateUrl: './buy-policy.component.html',
  styleUrls: ['./buy-policy.component.css']
})
export class BuyPolicyComponent implements OnInit {

  constructor(private service:SharedService) {}

  ngOnInit(): void {}

  PolicyId:string = '';
  PolicyAmount:number = 0;



  checkOut() {
    console.log("hi");
    this.service.getSimplePayLink({policyId:this.PolicyId,"amount":this.PolicyAmount}).subscribe((res:any)=>{
      console.log(res);
      window.location = res.url;
    })
  }

}
