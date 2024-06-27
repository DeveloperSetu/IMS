import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { productService } from '../../services/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductAddComponent } from '../product-add/product-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink,MatIconModule, ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(private srv:productService, private dialog:MatDialog){

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


    openDialog(id?:any) {
      const dialogConfig= new MatDialogConfig();
      dialogConfig.autoFocus=true;
      dialogConfig.disableClose=true;
      dialogConfig.width= "58%";
      dialogConfig.data= id;
      const diloagRef = this.dialog.open(ProductAddComponent,dialogConfig);
      diloagRef.afterClosed().subscribe(result=>{
        console.log("Dialog Closed");
        this.loadData();
        
      })
    }

    delete(id: any) {
      this.srv.delete(id).subscribe({
        next:(data)=>{
          console.log(data);
          this.loadData();
        },error:(er)=>{
          console.log(er);
        }
      })
      }
}