class Counter extends React.Component {
    state = {
        counter: 0
    }

    increment = () => {
        store.dispatch( incrementAC() );
    }
    
    decrement = () => {
        store.dispatch( decrementAC() );
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }

    // @todo Use componentDidMount to subscribe and force an update of the UI
}

ReactDOM.render( <Counter />, document.getElementById( 'root' ) );