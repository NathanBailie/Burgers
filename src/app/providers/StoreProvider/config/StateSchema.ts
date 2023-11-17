import type { HeaderSchema } from 'features/Header';
import type { ProductsSchema } from 'features/Products';
import type { OrderSchema } from 'features/Order';

export interface StateSchema {
    header: HeaderSchema
    products: ProductsSchema
    order: OrderSchema
}
