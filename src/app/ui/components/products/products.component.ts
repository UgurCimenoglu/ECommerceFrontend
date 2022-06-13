import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.Cog);
    this.httpClientService.get({
      controller: "Products",
    }).subscribe(data => console.log(data));

    // this.httpClientService.post(
    //   { controller: "Products" }, { name: "Product 3", stock: 3, price: 30 }).subscribe(data => console.log(data))

    //this.httpClientService.put({ controller: "products" }, { id: "27004c8c-5546-4221-9fd2-6c47d1be97b2", name: "Product 1", stock: 15, price: 25 }).subscribe();

    this.httpClientService.delete({ controller: "products" }, "cf2d6990-f4f1-4186-b12e-51a2ee429bee").subscribe();
  }

}
