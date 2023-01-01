import React from 'react';
import Img from '../../images/svg/Logo_iMajster.svg';


const Logo = (props) => {
	const {profile} = props;
	return(
		<div className="LogoKamila">
			 <p className="ProfileInitLog">{profile.initials}</p>
			<Img/>
		</div>
	)
}
export default Logo