import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Route, Router, RouterLink } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderAddComponent } from '../order-add/order-add.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [RouterLink,MatButton,CommonModule,MatIconModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.OrderId !== id);
    });
  }

  editOrder(id: number): void {
    this.router.navigate([`/orders/${id}`]);
  }

  createOrder(): void {
    this.router.navigate(['/orderAdd']);
  }
  viewDetails(id: number): void {
    this.router.navigate(['/order/order-details',id]);
  }
}

