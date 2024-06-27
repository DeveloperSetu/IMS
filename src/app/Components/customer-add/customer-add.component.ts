import { Component } from '@angular/core';
import {  Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule,MatInputModule, RouterLink, FormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit {
  customer:Customer={
    CustomerId:0,
    CustomerName:"",
    CustomerAddress:"",
    CustomerContact:""
  }
  buttonText:string="Save";
    constructor(@Inject(MAT_DIALOG_DATA)  public data:any,
      private srv:CustomerService,
      private dialogRef: MatDialogRef<CustomerAddComponent>,
      private route:ActivatedRoute
    ){}
    ngOnInit(): void {
     var id= this.data;
     console.log(this.data)
     this.getByID(id)
    }
    getByID(id:number){
  this.srv.get(id).subscribe({
    next:(res)=>{
      this.customer=res;
      console.log(this.customer)
      this.buttonText="Update";
    }
  })
    }
    SaveData(){
      console.log(this.customer)
      if(this.customer.CustomerId>0)
        {
          this.srv.update(this.customer)
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
          this.srv.create(this.customer)
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
  