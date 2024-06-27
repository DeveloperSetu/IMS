import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    MatDialogConfig,
  } from '@angular/material/dialog';
  import {MatTableModule} from '@angular/material/table';
  import { MatButtonModule } from '@angular/material/button';
  import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { CategoryAddComponent } from '../category-add/category-add.component';
  
@Component({
    selector: 'app-category-list',
    standalone: true,
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.css',
    imports: [HeaderComponent, SideBarComponent, FooterComponent,MatSlideToggleModule,MatTableModule, MatButtonModule, MatIconModule, RouterLink]
})
export class CategoryListComponent implements OnInit {
  dataList:Category[]=[]
  constructor(private srv:CategoryService,
    public dialog: MatDialog
  ){}
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.srv.getAll().subscribe({
      next:(result)=>{
        console.log(result)
        this.dataList=result
      },
      error:(er)=>{
        console.log(er)
      }
    })
  }
  openDialog(id?:number): void {
    const dialogConfig= new MatDialogConfig();
  dialogConfig.autoFocus=true;
  dialogConfig.disableClose=true;
  dialogConfig.width="40%",
  dialogConfig.data=id;
    const dialogRef = this.dialog.open(CategoryAddComponent, 
      dialogConfig
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadData();
    });
  }
  delete(id:number){
      this.srv.delete(id).subscribe({
        next:(r)=>{
          console.log(r)
          this.loadData();
        },
        error:(err)=>{
  console.log(err)
        }
      })
  }
  }
