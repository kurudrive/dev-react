import React from 'react';
import StaffCard from './StaffCard';

class StaffMap extends React.Component{

	// constructorは読み込まれたらとりあえず実行される部分
	constructor(props) {
    super(props);
    // stateを定義 オブジェクト形式で入れられる
    this.state = {count:0}
  }

	// State の countを変更するためのメソッドを定義
	countUp(){
    this.setState({count: this.state.count +1 });
  }

	render(){

		const staffList = [
			{
				id:'ishikawa',
				name:'いしかわ',
				image: '/images/staff_1.jpg',
				color: 'primary',
			},
			{
				id:'suzuki',
				name:'すずき',
				image: '/images/staff_2.jpg',
				color: 'secondary',
			},
			{
				id:'yamada',
				name:'やまだ',
				image: '/images/staff_3.jpg',
				color: 'success',
			},
		]

    return (
			<div className="card-deck mb-5">
				{staffList.map((staffItem) => {
				return (
					<StaffCard
					name = {staffItem.name}
					image = {staffItem.image}
					color = {staffItem.color}
					key = {staffItem.id}
					/>
					)
				})}
			</div>
    )
  }
}

export default StaffMap;
