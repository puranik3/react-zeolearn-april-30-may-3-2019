import React from 'react';

function StarRating( props ) {
  return (
    <div style={{whiteSpace: 'nowrap', width: '6em'}}>
      <span className="sr-only">{props.rating}/{props.total}</span>
      <span style={{
        color: 'lightgray',
        display: 'inline-block',
        verticalAlign: 'top',
      }}>
        {[...Array(props.total).keys()].map(x => <span key={x} className="glyphicon glyphicon-star-empty"></span>)}
      </span>
      <span title={props.rating + '/' + props.total} style={{
        color: 'gold',
        display: 'inline-block',
        width: props.rating + 'em',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        verticalAlign: 'top',
        position: 'relative',
        left: '-5em',
      }}>
        {[...Array(props.total).keys()].map(x => <span key={x} className="glyphicon glyphicon-star"></span>)}
      </span>
    </div>
  )
}

export default StarRating
