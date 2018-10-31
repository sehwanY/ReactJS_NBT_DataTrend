import React, { Component } from 'react'
import Modal from 'react-responsive-modal';

class contentNB extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <div onClick={this.onOpenModal}> {this.props.published_date} {this.props.title} </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2> {this.props.title} </h2>
                        {this.props.published_date}
                        <img src={this.props.images} />
                    <p>
                        {this.props.contentData}
                    </p>
                </Modal>
            </div>
        )
    }
}

// 메테리얼 ui 찾아보기 나~중에

// class modalContent extends Component {}



export default contentNB