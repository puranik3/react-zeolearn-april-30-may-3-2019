import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        console.log( this.props );

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
                                {console.log(this.state.items)}
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
                                                <span className="sr-only">{item.starRating}/5</span>
                                                <span style={{
                                                    color: 'lightgray',
                                                    display: 'inline-block',
                                                    verticalAlign: 'top',
                                                }}>
                                                    <span className="glyphicon glyphicon-star-empty"></span>
                                                    <span className="glyphicon glyphicon-star-empty"></span>
                                                    <span className="glyphicon glyphicon-star-empty"></span>
                                                    <span className="glyphicon glyphicon-star-empty"></span>
                                                    <span className="glyphicon glyphicon-star-empty"></span>
                                                </span>
                                                <span title={item.starRating + '/5'} style={{
                                                    color: 'gold',
                                                    display: 'inline-block',
                                                    width: item.starRating + 'em',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    verticalAlign: 'top',
                                                    position: 'relative',
                                                    left: '-5em',
                                                }}>
                                                    <span className="glyphicon glyphicon-star"></span>
                                                    <span className="glyphicon glyphicon-star"></span>
                                                    <span className="glyphicon glyphicon-star"></span>
                                                    <span className="glyphicon glyphicon-star"></span>
                                                    <span className="glyphicon glyphicon-star"></span>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </React.Fragment>
                );
                break;
            case FETCH_PRODUCTS_ERRORED:
                el = (
                    <div className="alert alert-danger">
                        Oops! Something went wrong while trying to fetch PRODUCTS. ({this.state.error})
                    </div>
                )
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
