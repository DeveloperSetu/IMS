import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { productService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-product',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink,MatIconModule,FooterComponent ],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css'
})
export class HomeProductComponent implements OnInit {

  constructor(private service:productService ){

  }
  text:string='dtujewryg'
  products:Product[]=[]

  ngOnInit(): void {
    this.loadData();
  }


  loadData(){
    this.service.getAll().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(er)=>{
        console.log(er);
      }
    })
  }
}