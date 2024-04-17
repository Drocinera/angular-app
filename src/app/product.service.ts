import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private figurines: any[] = [
    { id: 0, name: 'Figurine Astérix', price: 15, description: 'Figurine d\'Astérix, le célèbre gaulois.', image: `/assets/Images/Figurine Astérix.jpg` },
    { id: 1, name: 'Figurine Obélix', price: 15, description: 'Figurine d\'Obélix, l\'ami d\'Astérix.' , image: `/assets/Images/Figurine Obelix.jpg` },
    { id: 2, name: 'Figurine Idéfix', price: 12, description: 'Figurine d\'Idéfix, le petit chien blanc.', image: `/assets/Images/figurine Idefix.webp`  },
    { id: 3, name: 'Figurine Astérix et Obélix', price: 29, description: 'Figurine représentant Astérix et Obélix ensemble.', image: `/assets/Images/figurine Astérix&Obelix.webp` },
    { id: 4, name: 'Figurine Astérix et Idéfix', price: 21, description: 'Figurine représentant Astérix et Idéfix ensemble.', image: `/assets/Images/Figurine Atérix&Idefix.jpg` }
  ];

  getProductByIndex(index: number): any {
  console.log('Fetching product with index:', index);
  const product = this.figurines[index];
  console.log('Fetched product:', product);
  return product;
}
}
