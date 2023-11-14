import type { HeaderSchema } from 'features/Header/model/types/HeaderSchema';
import type { ProductsSchema } from 'features/Products/model/types/ProductsSchema';

export interface StateSchema {
    header: HeaderSchema
    products: ProductsSchema
}
