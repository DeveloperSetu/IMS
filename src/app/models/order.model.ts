import { OrderDetail } from "./order-detail";

export interface Order {
    OrderId: number;
    CustomerId: number;
    OrderDate: Date;
    TotalPrice: number;
    IsEmergency: boolean;
    DeliveryDate: Date;
    OrderDetails: OrderDetail[];
  }
  