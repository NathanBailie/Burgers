export interface OrderSchema {
    order: string
    name: string
    phone: string
    orderError: boolean
    nameError: boolean
    phoneError: boolean
    modalIsOpen: boolean
    modalText: string
}

export type Field = 'order' | 'name' | 'phone';

export interface ChangeValuePayload {
    field: Field
    value: string
}
