import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {OrderService} from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'episen-sca-cme-front';
  constructor(private orderService: OrderService){}
  ngOnInit(){
  }
  onFormSubmit(orderform: NgForm){
    let order = orderform.controls['order'].value;
    console.log(order);
    this.orderService.addOrder(order);
  }
}
