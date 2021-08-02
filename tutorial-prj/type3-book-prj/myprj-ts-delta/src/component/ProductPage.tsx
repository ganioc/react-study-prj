import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IProduct, getProduct } from "./ProductsData";
import ProductsPage from "./ProductsPage";
import Product from "./Product";
import { connect } from "react-redux";
import { addToBasket } from "./BasketActions";
import { IApplicationState } from "./Store";

interface IState {
  product?: IProduct;
  added: boolean;
  loading: boolean;
}
type Props = RouteComponentProps<{ id: string }>;

interface IProps extends RouteComponentProps<{ id: string }> {
  addToBasket: typeof addToBasket;
  getProduct: typeof getProduct;
  loading: boolean;
  product?: IProduct;
  added: boolean;
}

class ProductPage extends React.Component<IProps> {
  private handleAddClick = () => {
    // this.setState({ added: true });
    if (this.props.product) {
      this.props.addToBasket(this.props.product);
    }
  };
  private navAwayMessage = () =>
    "Are you sure you leave without buying this product?";
  // public constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     added: false,
  //     loading: true,
  //   };
  // }

  public componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      //const product = products.filter((p) => p.id === id)[0];
      // const product = await getProduct(id);
      // if (product !== null) {
      //   this.setState({ product, loading: false });
      // }
      this.props.getProduct(id);
    }
  }
  public render() {
    const product = this.props.product;
    return (
      <div className="page-container">
        {product || this.props.loading ? (
          <Product
            loading={this.props.loading}
            product={product}
            inBasket={this.props.added}
            onAddToBasket={this.handleAddClick}
          />
        ) : (
          // <React.Fragment>
          //   <h1>{product.name}</h1>
          //   <p>{product.description}</p>
          //   <p className="product-price">
          //     {new Intl.NumberFormat("en-US", {
          //       currency: "USD",
          //       style: "currency",
          //     }).format(product.price)}
          //   </p>
          //   {!this.state.added && (
          //     <button onClick={this.handleAddClick}>Add to basket</button>
          //   )}
          // </React.Fragment>
          <p>Product not found!</p>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToBasket: (product: IProduct) => dispatch(addToBasket(product)),
    getProduct: (id: number) => dispatch(getProduct(id)),
  };
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    added: store.basket.products.some((p) =>
      store.products.currentProduct
        ? p.id === store.products.currentProduct.id
        : false
    ),
    basketProducts: store.basket.products,
    loading: store.products.productsLoading,
    product: store.products.currentProduct || undefined,
  };
};

// export default ProductPage;
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
