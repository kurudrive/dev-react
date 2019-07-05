import React from 'react';
import StaffCard from './StaffCard';

class StaffStatic extends React.Component{

	render(){
    return (
			<div className="card-deck mb-5">
			<StaffCard
			id = 'ishikawa_static'
			name = 'いしかわ'
			image = '/images/staff_1.jpg'
			color = 'primary'
			/>
			<StaffCard
			id = 'isuzuki_static'
			name = 'すずき'
			image = '/images/staff_2.jpg'
			color = 'secondary'
			/>
			<StaffCard
			id = 'yamada_static'
			name = 'やまだ'
			image = '/images/staff_3.jpg'
			color = 'success'
			/>
			</div>
    )
  }
}

export default StaffStatic;
