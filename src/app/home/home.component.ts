import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title = 'Bienvenu sur la boutique "au petit village"' ;

searchTerm: string = '';

figurines: any[] = [
  { name: 'Figurine Astérix', price: 15, image: `/assets/Images/Figurine Astérix.jpg` },
  { name: 'Figurine Obélix', price: 15, image: `/assets/Images/Figurine Obelix.jpg` },
  { name: 'Figurine Idéfix', price: 12, image: `/assets/Images/figurine Idefix.webp` },
  { name: 'Figurine Astérix et Obélix', price: 29, image: `/assets/Images/figurine Astérix&Obelix.webp` },
  { name: 'Figurine Astérix et Idéfix', price: 21, image: `/assets/Images/Figurine Atérix&Idefix.jpg` }
];
sortOrder: 'asc' | 'desc' = 'asc';

sort(order: 'asc' | 'desc') {
  this.sortOrder = order;
}
}
