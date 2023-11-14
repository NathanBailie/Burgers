export interface Burger {
    basePrice: number
    grams: number
    image: string
    price: number
    text: string
    title: string
}

export interface ProductsSchema {
    data: Burger[] | []
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}
