import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Vendor } from '../../models/vendor.model';
import { VendorService } from '../../services/vendor.service';
@Component({
  selector: 'app-vendor-add',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule,MatInputModule, RouterLink, FormsModule],
  templateUrl: './vendor-add.component.html',
  styleUrl: './vendor-add.component.css'
})
export class VendorAddComponent implements OnInit {
  vendor:Vendor={
    VendorId:0,
    VendorName:"",
    VendorContact:"",
    VendorAddress:""
  }
  buttonText:string="Save";
    constructor(@Inject(MAT_DIALOG_DATA)  public data:any,
      private srv:VendorService,
      private dialogRef: MatDialogRef<VendorAddComponent>,
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
      this.vendor=res;
      console.log(this.vendor)
      this.buttonText="Update";
    }
  })
    }
    SaveData(){
      console.log(this.vendor)
      if(this.vendor.VendorId>0)
        {
          this.srv.update(this.vendor)
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
          this.srv.create(this.vendor)
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