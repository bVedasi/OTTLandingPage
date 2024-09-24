import React from 'react'

function MovieOrganisation(props) {
  return (
    <div className='card'>
        <img src={props.p.image} className='card-image-top'></img>
        <div className='card-body'>
            <h2>{props.p.name}</h2>
            <p>{props.p.description}</p>
            <button className='btn btn-dark'>Watch Now!</button>
        </div>
    </div>
  )
}

export default MovieOrganisation