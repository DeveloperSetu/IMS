import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { CategoryAddComponent } from './Components/category-add/category-add.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { CustomerAddComponent } from './Components/customer-add/customer-add.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { PurchaseListComponent } from './Components/purchase-list/purchase-list.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { ReturnListComponent } from './Components/return-list/return-list.component';
import { ReturnAddComponent } from './Components/return-add/return-add.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { OrderAddComponent } from './Components/order-add/order-add.component';
import { RegisterComponent } from './Components/register/register.component';
import { SaleListComponent } from './Components/sale-list/sale-list.component';
import { SaleAddComponent } from './Components/sale-add/sale-add.component';
import { VendorListComponent } from './Components/vendor-list/vendor-list.component';
import { VendorAddComponent } from './Components/vendor-add/vendor-add.component';
import { HomeProductComponent } from './Components/home-product/home-product.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ServiceComponent } from './Components/service/service.component';
import { HomeOrderComponent } from './Components/home-order/home-order.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch: 'full'},
// home.................................
    {path:'home',component:HomeComponent},
    {path:'dashbord', component:DashbordComponent},
   
// Ctegory Routhing............................
    {path:'categorys', component:CategoryListComponent},
    {path:'categorysAdd', component:CategoryAddComponent},
  
// Customer Routhing............................
    {path:'customers', component:CustomerListComponent},
    {path:'customersAdd', component:CustomerAddComponent},
  
// Contact..................................
    {path:'contact', component:ContactComponent},
    
// Login............................
   {path:'login', component:LoginComponent},
   
// Customer Routhing............................
    {path:'phurchases', component:PurchaseListComponent},
    {path:'phurchasesAdd', component:CustomerAddComponent},
  
//Product ........................
    {path:'products', component:ProductListComponent},
    {path:'productsAdd', component:ProductAddComponent},
  
// Return Routhing............................
    {path:'return', component:ReturnListComponent},
    {path:'returnAdd', component:ReturnAddComponent},
  
// Return Routhing............................
    {path:'order', component:OrderListComponent},
    {path:'orderAdd', component:OrderAddComponent},
    {path:'homeOrder' , component:HomeOrderComponent},

// order............................
    {path:'order', component:OrderListComponent},
    {path:'orderAdd', component:OrderAddComponent},
    {path:'order/order-details:id', component:OrderDetailsComponent},

// register............................
    {path:'register', component:RegisterComponent},
    
// Sale Routhing............................
    {path:'sale', component:SaleListComponent},
    {path:'saleAdd', component:SaleAddComponent},
// Vendor Routhing...........................
    {path:'vendor', component:VendorListComponent},
    {path:'vendorAdd', component:VendorAddComponent},
//========================HOME>==========================
{path:'homeProduct', component:HomeProductComponent},
{path:'aboutUS', component:AboutUsComponent},
{path:'service', component:ServiceComponent},

//Not Found ...................................
    {path:'**',component:NotFoundComponent},
];
