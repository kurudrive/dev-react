import React from 'react';
import StaffCard from './StaffCard';

class StaffMap extends React.Component{

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
					id = {staffItem.id}
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
