import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

// action constants
const LOADING = 'LOADING', FETCHING_PRODUCTS = 'FETCHING_PRODUCTS', FETCHED_PRODUCTS = 'FETCHED_PRODUCTS', FETCH_PRODUCTS_ERRORED = 'FETCH_PRODUCTS_ERRORED';
            
class ProductCatalog extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            status: LOADING,
            items: [],
            error: null
        };
    }

    render() {

        let el;

        switch( this.state.status ) {
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
                                    this.state.items.map(
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
                        Oops! Something went wrong while trying to fetch PRODUCTS. ({this.state.error})
                    </div>
                )
                break
            default:
                el = ''
        }
        
        return <div className="container">{el}</div>;
    }

    componentDidMount() { // called after component was added to the DOM
        this.setState(
            {
                status: FETCHING_PRODUCTS
            },
            () => {
                axios.get( 'https://awesome-store-server.herokuapp.com/products' )
                    .then( response => response.data ) 
                    .then( items => {
                        this.setState(
                            {
                                status: FETCHED_PRODUCTS,
                                items: items
                            }
                        )
                    })
                    .catch( error => {
                        this.setState(
                            {
                                status: FETCH_PRODUCTS_ERRORED,
                                error: error
                            }
                        );
                    });
            }
        )
    }
}

export default ProductCatalog;
