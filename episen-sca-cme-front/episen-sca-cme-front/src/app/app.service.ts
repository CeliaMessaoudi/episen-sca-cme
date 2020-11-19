import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  addOrder(order: String): void {
    this.http.post<any>('http://192.168.99.100:8080/add/order', order).subscribe(data => {
      console.log("ça fonctionne");
    });
  }
}
