import React from 'react';
import WhatsApp from '@material-ui/icons/WhatsApp';
import MailOutline from '@material-ui/icons/MailOutline';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';

const Social = () => {
	return (
		<div className='social'>
			<a href='namanchandel2003@gmail.com' className='mail shv'>
				<MailOutline />
			</a>
			<a href='#' className='whatsapp shv'>
				<WhatsApp />
			</a>
			<a href='#' className='facebook shv'>
				<Facebook />
			</a>
			<a href='#' className='instagram shv'>
				<Instagram />
			</a>
		</div>
	);
};

export default Social;
