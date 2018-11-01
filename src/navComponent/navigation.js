import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class navigation extends Component {

    state = {
        search_value : null
    }

    // 사용되는 변수를 받아서 저장
    componentWillMount(){
        this._getProps(this.props)
    }

    // 받은 props 저장
    _getProps = (value) => {
        this.setState({
            target : value.target_Type[0],
            keyword : value.keyword_Type[0]
        })
    }
    
    // 타겟 변경
    _targetSelectedChange = (event) => {
        this.setState({
            target : event.target.value
        })
    }

    // 키워드 타입 변경
    _keywordSelectedChange = (event) => {
        this.setState({
            keyword : event.target.value
        })
    }

    // 옵션 변경 
    _optionChange = () => {
        const argText = document.getElementById('search_keyword').value
        this.setState({
            search_value : argText
        })
        return true
    }

    // 재검색 요청
    _searchStart = async() =>{
        await this._optionChange()
        this.props.reSearch_event(this.state.target, this.state.keyword, this.state.search_value)
    }

    render() {
        //console.log(this.props)
        return(
            <div className="navigtion_origin">
                <select onChange={this._targetSelectedChange} >
                    {this.props.target_Type.map((value, index) => {
                        return <option value={value} key={index} >{value}</option>
                    })}
                </select>

                <select onChange={this._keywordSelectedChange} >
                    {this.props.keyword_Type.map((value, index) => {
                        return <option value={value} key={index} >{value}</option>
                    })}
                </select>

                <input type="Text" id="search_keyword"></input>
                <button onClick={this._searchStart}>Search</button>
            </div>
        )
    }
}

export default navigation