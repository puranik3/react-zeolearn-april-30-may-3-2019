import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import { fetchingProductsThunk } from '../actions/creators'

import { LOADING, FETCHING_PRODUCTS, FETCHED_PRODUCTS, FETCH_PRODUCTS_ERRORED } from '../actions/constants';
            
class ProductCatalog extends React.Component {
    render() {
        let el;

        switch( this.props.status ) {
            case LOADING: 
                el = (
                    <div className="alert alert-info">
                        We are working on it...
                    </div>
                );
                break;
            case FETCHING_PRODUCTS:
                el = (
                    <div className="alert alert-success">
                        Fetching PRODUCTS. Hang on...
                    </div>
                );
                break;
            case FETCHED_PRODUCTS:
                el = (
                    <React.Fragment>
                        <h1>Product Catalog</h1>
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.items.map(
                                        item => <tr key={item.id}>
                                            <td>
                                                <Link to={{
                                                    pathname: '/catalog/' + item.id,
                                                    state: item
                                                }}>{item.name}</Link>
                                            </td>
                                            <td>
                                                {item.description}
                                            </td>
                                            <td style={{fontSize: '1.7em'}}>
                                                <StarRating rating={item.starRating} total={5}/>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <Link to={{
                          pathname: '/catalog/add/',
                        }}><button className="btn btn-primary">Add Product</button></Link>
                    </React.Fragment>
                );
                break;
            case FETCH_PRODUCTS_ERRORED:
                el = (
                    <div className="alert alert-danger">
                        Oops! Something went wrong while trying to fetch PRODUCTS. ({this.props.error})
                    </div>
                )
                break
            default:
                el = '';
        }
        
        return <div className="container">{el}</div>;
    }

    componentDidMount() { // called after component was added to the DOM
        this.props.dispatch( fetchingProductsThunk() );
    }
}

export default ProductCatalog;
