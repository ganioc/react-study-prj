import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IProduct, products, getProduct } from "./ProductsData";
import ProductsPage from "./ProductsPage";
import Product from "./Product";

interface IState {
  product?: IProduct;
  added: boolean;
  loading: boolean;
}
type Props = RouteComponentProps<{ id: string }>;

class ProductPage extends React.Component<Props, IState> {
  private handleAddClick = () => {
    this.setState({ added: true });
  };
  public constructor(props: Props) {
    super(props);
    this.state = {
      added: false,
      loading: true,
    };
  }

  public async componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      //const product = products.filter((p) => p.id === id)[0];
      const product = await getProduct(id);
      if (product !== null) {
        this.setState({ product, loading: false });
      }
    }
  }
  public render() {
    const product = this.state.product;
    return (
      <div className="page-container">
        {product ? (
          <Product
            product={product}
            inBasket={this.state.added}
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
export default ProductPage;
