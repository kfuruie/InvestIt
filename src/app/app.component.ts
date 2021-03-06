import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  investments = [
    {id: 0, name: "Fury Investments", price: 10, shares: 0},
    {id: 1, name: "Le Holdings", price: 20, shares: 0},
    // {id: 2, name: "Upsorn Fund", price: 50, shares: 0}
  ];

  constructor(private http: HttpClient) {   }

  total = 0;

  calculateTotal() {
    let localTotal = 0;
    for (let i = 0; i < this.investments.length; i++) {
      localTotal += this.investments[i].price * this.investments[i].shares;
    }
    this.total = localTotal;
  }

  updateShares(event: any, id) {
    this.investments[id].shares = event.target.value;
    this.calculateTotal();
  }

  onSubmit(): void {
      let params = JSON.stringify(this.investments);
      this.http.post<any>('http://localhost/CS4640/investform.php', params)
      .subscribe(data => {
       // this.postId = data.id;
    })
  
  }

}
