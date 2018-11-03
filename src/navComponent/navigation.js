import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import './navigation.css'

class navigation extends Component {

    state = {
        search_value : "",
        search_value_second : "",
        multiple : false
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

        if(event.target.value === "multiple"){
            this.setState({
                multiple : true
            })
        }else{
            this.setState({
                multiple : false
            })
        }
    }

    // 옵션 변경 
    _optionChange = () => {
        const argText = document.getElementById('search_keyword').value
        this.setState({
            search_value : argText
        })
        if(this.state.multiple === true){
            const argTextSecond = document.getElementById('search_keyword_second').value
            this.setState({
                search_value_second : argTextSecond
            })
        }
        return true
    }

    // 재검색 요청
    _searchStart = async() =>{
        await this._optionChange()
        this.props.reSearch_event(this.state.target, this.state.keyword, this.state.search_value, this.state.search_value_second)
    }

    // 엔터 감지
    _enterSearch = () => {
        if(window.event.keyCode === 13){
            this._searchStart() 
        }
    }

    // multiple 이 true 일 때, 함수를 교체하여 실행
    // 2번째 키워드로 focus를 이동시킨다.
    _enterFocusChange = () => {
        if(window.event.keyCode === 13){
            document.getElementById('search_keyword_second').focus()
        }
    }
    
    render() {
        //console.log(this.props)
        return(
            <div className="navigtion_origin">
                <select onChange={this._targetSelectedChange} className="select_Type">
                    {this.props.target_Type.map((value, index) => {
                        return <option value={value} key={index} >{value}</option>
                    })}
                </select>

                <select onChange={this._keywordSelectedChange} className="select_Type">
                    {this.props.keyword_Type.map((value, index) => {
                        return <option value={value} key={index} >{value}</option>
                    })}
                </select>
                
                <TextField
                    id="search_keyword"
                    label="input SearchData"
                    placeholder="press Enter"
                    variant="outlined"
                    onKeyUp={this.state.multiple ? this._enterFocusChange : this._enterSearch}
                />
                {this.state.multiple ? 
                <TextField
                    id="search_keyword_second"
                    label="input SearchData"
                    placeholder="press Enter"
                    variant="outlined"
                    onKeyUp={this._enterSearch}
                /> 
                : null
                }
            </div>
        )
    }
}

export default navigation