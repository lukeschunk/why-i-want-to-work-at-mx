import React from 'react';
import Modal from './modal';
// import { Component } from 'react';

class Header extends React.Component {
	render() {
		const styles = {
			header: {
				width: '100%',
				backgroundColor: '#059E9A',
				height: '350px',
				marginTop: '0',
				marginLeft: '0',
				marginRight: '0',
				color: 'white',
				textAlign: 'center',
				paddingTop: '100px',
				boxSizing: 'border-box'
				// fontWeight '300'
			},
			mainText: {
				margin: '0',
				fontWeight: '600',
				fontSize: '3.5em'
			},
			subText: {
				fontWeight: '100',
				margin: '0'
			},
			wedge: {
				margin: '0 auto',
				borderWidth: '0 40px 30px 40px',
				borderStyle: 'solid',
				borderColor: 'transparent transparent #059E9A transparent',
				boxSizing: 'border-box',
				transform: 'rotate(180deg)',
				width: '30px'
			},
			wedgeAlt: {
				margin: '0 auto',
				borderWidth: '0 40px 30px 40px',
				borderStyle: 'solid',
				borderColor: 'transparent transparent #f4f4f4 transparent',
				boxSizing: 'border-box',
				transform: 'rotate(180deg)',
				width: '30px'
			},
			section: {
				width: '100%',
				backgroundColor: '#f4f4f4',
				position: 'relative',
				height: '400px'
			},
			sectionAlt: {
				width: '100%',
				backgroundColor: 'black',
				position: 'relative',
				paddingBottom: '40px'
				// height: '400px'
			},
			innerSection : {
				width: '880px',
				margin: '0 auto',
				paddingTop: '30px'
			},
			leftSection: {
				width: '350px',
				lineHeight: '2.8em',
				textAlign: 'left',
				float: 'left',
				marginTop: '10px'
			},
			rightSection: {
				width: '360px',
				height: '240px',
				float: 'left',
				backgroundImage: 'url(images/luke-alt-large.jpg)',
				backgroundSize: 'cover',
				marginLeft: '160px'
			},
			image: {
				// borderRadius: '50%',
				width: '350px',
				marginTop: '30px',
				margin: '0',
				padding: '0'
			},
			paragraph: {
				fontSize: '1em'
			},
			rule: {
				margin: '0',
				padding: '0'
			}
		}
		return (
			<div>
				<div style={styles.header}>
					<h1 style={styles.mainText} > WHY I WANT TO WORK AT MX </h1>
					<h2 style={styles.subText} > By Luke Schunk. Created with React.js </h2>
				</div>
				<div className='section' style={styles.section}>
					<div style={styles.wedge}> </div>
					<div style={styles.innerSection} >
						<div style={styles.leftSection} >
							<hr style={styles.rule} />
							<p style={styles.paragraph}> I am very interested in this apprenticeship for quite a few reasons. Also - I think I would be a pretty good fit. Click the boxes below to find out why! </p>
							<hr style={styles.rule} />
						</div>

						<div style={styles.rightSection} >

						</div>
					</div>
				</div>

				<div className='section' style={styles.sectionAlt} >
					<div style={styles.wedgeAlt}> </div>
					<div style={styles.innerSection} >
						<Modal iconSource='./images/money-desktop-white.png' iconSourceBig='./images/product-green.png' openModalText="I like that MX makes actual products. Things that the whole team can get behind, work on, and imrpove upon. This appeals to me more than making a one-off site for a client." openModalHeading="It's an Actual Product" />
						<Modal iconSource='./images/mentor-white.png' iconSourceBig='./images/mentor-green.png' openModalText="I like how there is an emphasis on mentorship for the apprentices. I really want to work in a place where I can learn from people much smarter and more experienced than myself, and MX is definitely that." openModalHeading="Mentorship" />
						<Modal iconSource='./images/react-white.png' iconSourceBig='./images/react-green.png' openModalText="I want to use and learn about modern technology. I like that MX uses React and ES6 and other modern tech - it wouldn't be nearly as valuable for me to work at a place that is using soon-to-be obsolete technology." openModalHeading="Modern Tech"  />
						<Modal iconSource='./images/design-white.png' iconSourceBig='./images/design-green.png' openModalText="I used to do graphic design at my old job, and good clean design has always been important to me. I can tell from your website and open source components that it's important to you too." openModalHeading="MX Cares About Design"  />
						<Modal iconSource='./images/culture-white.png' iconSourceBig='./images/culture-green.png' openModalText="True, I've never worked at MX, but it looks like a really fun place to work. Also. I really like ping pong." openModalHeading="Great Culture?"  />
						<Modal iconSource='./images/me-white.png' iconSourceBig='./images/me-green.png' openModalText="I am so excited about the opportunity to work on a product that thousands of people use. I'm sure I have a lot to learn - which is ok with me. I love learning new things and strive to always be better." openModalHeading="Why Me?"  />
					</div>
				</div>



			</div>
		)
	}
};

export default Header;


							// <img src='images/luke-alt-edit.jpg' style={styles.image} />
