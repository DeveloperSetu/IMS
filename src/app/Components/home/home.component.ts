import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { productService } from '../../services/product.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FooterComponent,MatTableModule,FormsModule,CommonModule, MatButtonModule, MatIconModule,RouterLink,FilterPipeModule]
})
export class HomeComponent  implements OnInit {
searchText: any;

    constructor(private srv:productService,){
  
    }
    productList:Product[]=[]
    
    ngOnInit(): void {
      this.loadData()
    }
  
    loadData(){
      this.srv.getAll().subscribe({
        next:(data)=>{
          this.productList=data;
        },
        error:(er)=>{
          console.log(er);
          
        }
      })
    }
}