import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent  implements OnInit {
  order: Order | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.orderService.getOrder(id).subscribe(order => this.order = order);
  }

  goBackToList(): void {
    // Navigate back to the order list component
    this.router.navigate(['order']);
  }
}