import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FilesystemDirectory, Plugins } from '@capacitor/core';
// const { Filesystem } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products: any[] = [];
  constructor(private http: HttpClient){
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(res => {
      this.products = res;
    });
  }

}
