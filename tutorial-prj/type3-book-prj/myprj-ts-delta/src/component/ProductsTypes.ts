import { IProduct } from "./ProductsData";

export enum ProductsActionTypes {
    GETALL = "PRODUCTS/GETALL",
    LOADING = "PRODUCTS/LOADING"
}

export interface IProductsGetAllAction {
    type: ProductsActionTypes.GETALL,
    products: IProduct[]
}

export interface IProductLoadingAction {
    type: ProductsActionTypes.LOADING,

}

export type ProductsAction = | IProductsGetAllAction | IProductLoadingAction;

