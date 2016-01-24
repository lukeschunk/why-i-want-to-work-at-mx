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
					<div onClick={this._closeModal.bind(this)} style={styles.background}>


						<div>
							Close Modal
						</div>
					</div>
				);
			}
		}

        render() {
			return (
				<div>
					{this._renderModal()}
					<div className="click-box" style={styles.clickBox} onClick={this._openModal.bind(this)} >
						<h3 style={styles.clickBoxHeader}> {this.props.clickBoxHeader} </h3>
					</div>
				</div>
			)
		}

}

const styles = {
	background: {
		backgroundColor: 'black',
		opacity: '0.9',
		position: 'fixed',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0'
	},
	clickBox: {
		width: '30%',
		backgroundColor: 'black',
		height: '200px',
		color: 'white',
		padding: '10px',
		textAlign: 'center',
		cursor: 'pointer'
	},
	clickBoxHeader: {
		fontWeight: '100',
		fontSize: '1.5em'
	}

}

Modal.defaultProps = {
	clickBoxHeader: "Click To Open!"
}

export default Modal;
