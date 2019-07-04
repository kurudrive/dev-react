import React from 'react';
import StaffCard from './StaffCard';

class StaffStatic extends React.Component{

	render(){
    return (
			<div className="card-deck mb-5">
			<StaffCard
			name = 'いしかわ'
			image = '/images/staff_1.jpg'
			color = 'primary'
			/>
			<StaffCard
			name = 'すずき'
			image = '/images/staff_2.jpg'
			color = 'secondary'
			/>
			<StaffCard
			name = 'やまだ'
			image = '/images/staff_3.jpg'
			color = 'success'
			/>
			</div>
    )
  }
}

export default StaffStatic;
