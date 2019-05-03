// @todo Define connect( mapStateToProps, mapDispatchToProps ) that returns another function that accepts a component and returns a ConnectedComponent
// @todo ConnectedComponent renders Component, passing in results of calling mapStateToProps, mapDispatchToProps as props, along with any other props passed to it. It also subscribes to tge store to force update on store changes

function Counter( props ) {
    const { increment, decrement, counter } = props;
    
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

// @todo Define mapStateToProps( state ), mapDispatchToProps( dispatch ) and connect( mapStateToProps, mapDispatchToProps ). Call connect(...)( Counter )