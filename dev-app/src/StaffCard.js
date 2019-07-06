import React from 'react';

class StaffCard extends React.Component{

	// constructorは読み込まれたらとりあえず実行される部分
	// constructor(props) {
  //   super(props);
  //   // stateを定義 オブジェクト形式で入れられる
  //   this.state = {isModalOpen:false}
  // }
	//
	// // スタッフをクリックされた時の処理
	// handleClickStaff(){
	// 	this.setState({isModalOpen: true});
	// }
	//
	// handleClickClose(){
	// 	this.setState({isModalOpen: false});
	// }
	//
	//  onClick={() => {this.handleClickStaff()}}

  render(){

		// ここは普通のjsなのでコメント書けます
		// console.log(this.state.isModalOpen);

		// var elementBody = document.body;
		// if ( this.state.isModalOpen === true ){
		// 	elementBody.classList.toggle('modal-open');
		// }

		// let modal;

		// if ( this.state.isModalOpen ){
		// 	modal = (
		//
		// 	);
		// }

    return (
			<div className={`card border-${this.props.color}`} key={this.props.id}>
			  <img src={this.props.image} className="card-img" alt="..." />
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <button className="btn btn-primary" data-toggle="modal" data-target={`#${this.props.id}`}>Go somewhere</button>
			  </div>

				<div className="modal fade show" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title" id="exampleModalLabel">{this.props.name}</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        ...
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>

      </div>
    )
  }
}

export default StaffCard;
