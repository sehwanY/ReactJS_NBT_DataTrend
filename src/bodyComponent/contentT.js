import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import Button from '@material-ui/core/Button';
import './content.css';


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
            <div className="contentArea">
                <Button onClick={this.onOpenModal} variant="contained" color="primary" className="contButton">
                    ( {this.props.published_date} {this.props.message} )
                </Button>

                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2> {this.props.author} ( {this.props.tweet_id} ) </h2>
                    <div dangerouslySetInnerHTML={ {__html: this.props.published_date} }> 
                    </div>
                    <div dangerouslySetInnerHTML={ {__html: this.props.message} }> 
                    </div>
                </Modal>
            </div>
        )
    }
}

// 메테리얼 ui 찾아보기 나~중에

// class modalContent extends Component {}


export default contentT