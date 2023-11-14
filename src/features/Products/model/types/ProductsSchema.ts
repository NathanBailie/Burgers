export interface ProductsSchema {
    data: any
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}
