import { Component, inject, Inject, OnInit } from '@angular/core';
import { productService } from '../../services/product.service';
import { MAT_DIALOG_DATA, MatDialogModule,MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule,MatInputModule, RouterLink,CommonModule, FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) 
  public data:any,
               private srv:productService, 
               private rout:ActivatedRoute,
               private dialogRef:MatDialogRef<ProductAddComponent>) {
    
  }
  ngOnInit(): void {
    var id= this.data;
    console.log(this.data)
    this.getByID(id)
  }

  product:Product={
   ProductId:0,
   CategoryId:0,
   ProductName :"",
   Description :"",
   Price:0,
   Quantity:0,
   ReorderQty:0
 };
  buttonText:string = "Add"
 
  getByID(id:number){
    this.srv.get(id).subscribe({
      next:(res)=>{
        this.product=res;
        console.log(this.product)
        this.buttonText="Update";
      }
    })
      }
      saveData(){
        console.log(this.product)
        if(this.product.ProductId>0)
          {
            this.srv.update(this.product)
            .subscribe({
              next:(data)=>{
                console.log(data)
                this.dialogRef.close();
              },
               error:(e)=>{
                console.log(e)
               } 
            })
          }
          else
          { 
            this.srv.create(this.product)
            .subscribe({
              next:(data)=>{
                console.log(data)
                this.dialogRef.close();
              },
               error:(e)=>{
                console.log(e)
               } 
            })}
       
      }
    }
    