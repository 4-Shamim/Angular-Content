import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getProducts() {
    return [
      {id: 1, name: "Samsung Note 8", price:80000},
      {id: 2, name: "OnePlus 6t", price:60000},
      {id: 3, name: "Note Book", price:50000},
      {id: 4, name: "Demo Product", price:55000},
    ];
  }

}
