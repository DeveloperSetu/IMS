import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, RouterLink,Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-order-add',
  standalone: true,
  imports: [MatButton,ReactiveFormsModule,CommonModule,RouterLink,FormsModule,HttpClientModule,MatDialogModule,MatFormFieldModule,MatInputModule],
  templateUrl: './order-add.component.html',
  styleUrl: './order-add.component.css'
})

export class OrderAddComponent implements OnInit {
  order: Order = {
    OrderId: 0,
    CustomerId: 0,
    OrderDate: new Date(),
    TotalPrice: 0, // This will be set by the API
    IsEmergency: false,
    DeliveryDate: new Date(),
    OrderDetails: []
  };
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.isEditMode = true;
      this.orderService.getOrder(id).subscribe(order => this.order = order);
    }
  }

  saveOrder(): void {
    if (this.isEditMode) {
      this.orderService.updateOrder(this.order.OrderId, this.order).subscribe(() => this.router.navigate(['/orders']));
    } else {
      this.orderService.addOrder(this.order).subscribe(() => this.router.navigate(['/orders']));
    }
  }

  
  addOrderDetail(): void {
    this.order.OrderDetails.push({ Id: 0, OrderId: this.order.OrderId, PrdId: 0, Qty: 0 });
  }

  removeOrderDetail(index: number): void {
    this.order.OrderDetails.splice(index, 1);
  }
  
}