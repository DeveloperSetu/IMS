import { Component, Inject, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatInputModule} from '@angular/material/input'; 
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'app-category-add',
    standalone: true,
    templateUrl: './category-add.component.html',
    styleUrl: './category-add.component.css',
    imports: [FooterComponent, SideBarComponent, HeaderComponent,MatDialogModule, MatFormFieldModule,MatInputModule,HttpClientModule, RouterLink, FormsModule,
    ]
})
export class CategoryAddComponent implements OnInit {
  category:Category={
    CategoryId: 0,
    CategoryName: "",
    Description: "",
    ProductId: 0,
    ProductName: '',
    Price: 0,
    Quantity: 0,
    ReorderQty: 0
  }
  buttonText:string="Save";
    constructor(@Inject(MAT_DIALOG_DATA)  public data:any,
      private srv:CategoryService,
      private dialogRef: MatDialogRef<CategoryAddComponent>,
      private route:ActivatedRoute,
      
    ){}
    ngOnInit(): void {
     var id= this.data;
     console.log(this.data)
     this.getByID(id)
    }
    getByID(id:number){
  this.srv.get(id).subscribe({
    next:(res)=>{
      this.category=res;
      console.log(this.category)
      this.buttonText="Update";
    }
  })
    }
    SaveData(){
      console.log(this.category)
      if(this.category.CategoryId>0)
        {
          this.srv.update(this.category)
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
          this.srv.create(this.category)
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
  