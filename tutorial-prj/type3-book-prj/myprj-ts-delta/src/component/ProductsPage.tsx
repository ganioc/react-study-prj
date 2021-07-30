import * as React from "react";
import { IProduct } from "./ProductsData";
import { RouteComponentProps, Link } from "react-router-dom";
import { connect } from "react-redux";
import { IApplicationState } from "./Store";
import { getProducts } from "./ProductsActions";
import ProductsList from "./ProductsList";

interface IState {
  products: IProduct[];
  search: string;
}
interface IProps extends RouteComponentProps {
  getProducts: typeof getProducts; // action creator,
  loading: boolean; // whether products are being fetched,
  products: IProduct[];
}
class ProductsPage extends React.Component<IProps, IState> {
  // public constructor(props: RouteComponentProps) {
  //   super(props);
  //   this.state = {
  //     products: [],
  //     search: "",
  //   };
  // }
  public componentDidMount() {
    // this.setState({ products });
    this.props.getProducts();
  }
  // public static getDerivedStateFromProps(
  //   props: RouteComponentProps,
  //   state: IState
  // ) {
  //   const searchParams = new URLSearchParams(props.location.search);
  //   const search = searchParams.get("search") || "";
  //   return {
  //     products: state.products,
  //     search,
  //   };
  // }
  public render() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const search = searchParams.get("search") || "";

    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools for ReactJS!
        </p>
        <ProductsList
          search={search}
          products={this.props.products}
          loading={this.props.loading}
        />
      </div>
    );
  }
}
const mapStateToProps = (store: IApplicationState) => {
  return {
    loading: store.products.productsLoading,
    products: store.products.products,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

// export default ProductsPage;
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
