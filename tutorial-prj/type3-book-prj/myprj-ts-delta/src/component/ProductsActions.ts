import { async } from "q";
import { Action, ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getProduct as getProductFromAPI, getProducts as getProductsFromAPI } from "./ProductsData";

import { IProductsGetAllAction, IProductsGetSingleAction, IProductsLoadingAction, IProductsState, ProductsActionTypes } from "./ProductsTypes";

// Action creator
const loading: ActionCreator<IProductsLoadingAction> = () => {
    return {
        type: ProductsActionTypes.LOADING
    }
}

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        // 
        dispatch(loading());
        // get the products asynchronously from fake API
        const products = await getProductsFromAPI();
        // dispatch the final requried action
        return dispatch({
            products,
            type: ProductsActionTypes.GETALL
        })
    }
};

export const getProduct: ActionCreator<ThunkAction<Promise<any>, IProductsState, null, IProductsGetSingleAction>> = (id: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(loading());
        const product = await getProductFromAPI(id);
        dispatch({
            product,
            type: ProductsActionTypes.GETSINGLE
        });
    }
}


