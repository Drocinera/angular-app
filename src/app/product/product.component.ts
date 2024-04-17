import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productIndex = +params['id'];
      if (!isNaN(productIndex)) {
        this.loadProductDetails(productIndex);
      }
    });
  }

  loadProductDetails(index: number) {
  console.log('Product index:', index);
  this.product = this.productService.getProductByIndex(index);
  console.log('Product details:', this.product);
}
}

  

