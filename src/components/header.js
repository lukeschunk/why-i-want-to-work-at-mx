import React from 'react';
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
			section: {
				width: '100%',
				backgroundColor: '#f4f4f4',
				position: 'relative',
				height: '400px'
			},
			innerSection : {
				width: '60%',
				margin: '0 auto',
				paddingTop: '30px',
				textAlign: 'center'
			},
			leftSection: {
				width: '340px',
				display: 'inline-block',
				padding: '15px',
				lineHeight: '2.2em',
				textAlign: 'left'
			},
			rightSection: {
				width: '50%',
				display: 'inline-block',
				paddingLeft: '50px'
			},
			image: {
				borderRadius: '50%',
				width: '200px',
				marginTop: '30px'
			},
			paragraph: {
				fontSize: '1.3em'
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
						<hr />
						<p style={styles.paragraph}> There are quite a few reasons why I want this apprenticeship and why I think I would be a good fit. Click the boxes below to find out what they are!</p>
						<hr />
						</div>
						<div style={styles.rightSection} >
							<img src='images/luke-alt-edit.jpg' style={styles.image} />
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default Header;
