import React, { Component } from 'react';

class Masthead_background extends Component {
render() {
    let imageSource = 'https://njdc.info/wp-content/uploads/2016/04/atlanta-skyline-wide-edited.jpg';
	const myStyle={
        backgroundImage:`url(${imageSource})`,
		height:'100vh',
		marginTop:'-70px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		};
	return (
	<div style={myStyle} >

	</div>
	);
    
}
}

export default Masthead_background;


