import React from 'react';

class StaffCard extends React.Component{
  render(){
    return (
			<div className={`card border-${this.props.color}`}>
			  <img src={this.props.image} className="card-img" alt="..." />
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <a href="#" className="btn btn-primary">Go somewhere</a>
			  </div>
      </div>
    )
  }
}

export default StaffCard;
