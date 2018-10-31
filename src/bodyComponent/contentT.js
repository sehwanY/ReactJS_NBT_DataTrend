import React, { Component } from 'react'
import Modal from 'react-responsive-modal';


class contentT extends Component {
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
                <div onClick={this.onOpenModal}> {this.props.published_date} {this.props.message} </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2> {this.props.author} {this.props.tweet_id} </h2>
                        {this.props.published_date}
                    <p>
                        {this.props.message}
                    </p>
                </Modal>
            </div>
        )
    }
}

// 메테리얼 ui 찾아보기 나~중에

// class modalContent extends Component {}


export default contentT