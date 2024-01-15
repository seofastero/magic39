
export interface IPerson {
    id: number,
    name: string,
    img: string[]
}
export interface IMaster {
    id: number,
    name: string,
    age: string,
    height: string,
    weight: string,
    doobs: string,
    workStart: string,
    workEnd: string,
    status: string,
    placeholder?: string,
    img: string[]
}

export interface IDiscount {
    id: number,
    img: string,
    name: string,
    placeholder: string,
    description: string
}
type Action = {
    name: string
}
export interface IProgram {
    id: number,
    name: string,
    time: number,
    price: number,
    description: string,
    img: string,
    actions: Action[]
}
export interface IInterior {
    id: number,
    name: string,
    description: string,
    alt_name: string,
    img: string[]
}