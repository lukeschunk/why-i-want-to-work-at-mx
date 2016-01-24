import React from 'react';

class Modal extends React.Component {

		constructor (props) {
			super(props);
			this.state = {
				isOpen: false
			};
		}

		_openModal() {
			this.setState({
				isOpen: true
			});
		}

		_closeModal() {
			this.setState({
				isOpen: false
			});
		}

        _renderModal() {
			if(this.state.isOpen) {
				return (
					<div>

						<div style={styles.openModalContainer} >
							<i onClick={this._closeModal.bind(this)} style={styles.modalExit} className="fa fa-2x fa-times-circle"></i>
							<h1> {this.props.openModalHeading} </h1>
							<p> {this.props.openModalText} </p>
							<img src={this.props.iconSourceBig} style={styles.iconStyleBig} />
						</div>
						<div onClick={this._closeModal.bind(this)} style={styles.background}> </div>
					</div>
				);
			}
		}

        render() {
			return (
				<div style={styles.modalContainer}>
					{this._renderModal()}
					<div className="click-box" style={styles.clickBox} onClick={this._openModal.bind(this)} >

						<img src={this.props.iconSource} style={styles.iconStyle} />
					</div>
				</div>
			)
		}

}

const styles = {
	background: {
		backgroundColor: 'black',
		opacity: '0.7',
		position: 'fixed',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0',
		cursor: 'pointer'
	},
	clickBox: {
		// width: '30%',
		// backgroundColor:
		height: '200px',
		color: 'white',
		padding: '10px',
		textAlign: 'center',
		cursor: 'pointer',
		border: '1px solid white'
	},
	clickBoxHeader: {
		fontWeight: '100',
		fontSize: '1.2em',
		textAlign: 'center'
	},
	modalContainer: {
		display: 'inline-block',
		width: '33%'
	},
	openModalContainer: {
		position: 'fixed',
		top: '50px',
		zIndex: '1000',
		// top: '40px',
		left: '28%',
		width: '40%',
		// height: '600px',
		backgroundColor: 'white',
		margin: '0 auto',
		opacity: '1',
		padding: '50px',
		lineHeight: '2em'
	},
	modalExit: {
		float: 'right',
		marginTop: '-20px',
		cursor: 'pointer'
	},
	iconStyle: {
		width: '60%',
		margin: '0 auto',
		marginTop: '15px'
	},
	iconStyleBig: {
		width: '30%'
	}

}

Modal.defaultProps = {
	clickBoxHeader: "Click To Open!",
	openModalText: "This is why I want to work at MX...",
	openModalHeading: "Reason Heading",
	iconSource: './images/culture-green.png',
	iconSourceBig: './images/culture-green.png'
}

export default Modal;

						// <h3 style={styles.clickBoxHeader}> {this.props.clickBoxHeader} </h3>
