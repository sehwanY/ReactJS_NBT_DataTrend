import React, { Component } from 'react'
import Chip from '@material-ui/core/Chip';

class topicTrendRank extends Component {

    render() {
        const textData = this.props.rank + "위 -" + this.props.rankTitle
        return ( 
            <div className="RankingDiv">
                <Chip label= {textData} variant="outlined" />
            </div>
        )
    }
}

export default topicTrendRank  