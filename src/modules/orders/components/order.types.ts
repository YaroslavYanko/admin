export interface JoinedOrderProductsItem{
    id?:string;
    order_id?:string;
    products_id:string;
    amount:number;
}

export interface OrderForm {
    id: string;
    client_adress: string;
    client_name: string;
    client_surname: string;
    client_phone: string;
    status: string;
    joined_orders_products: JoinedOrderProductsItem[];
}
