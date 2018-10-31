import React, { Component } from 'react';
import './App.css';
import Navigation from './navComponent/navigation'
import ContentNB from './bodyComponent/contentNB'
import ContentT from './bodyComponent/contentT'

class App extends Component {

  // 검색 조건 수정에 사용되는 기본 변수들
  // 받아온 데이터를 저장할 변수들
  state = {
    apiKey : "4370168664877217907",

    target_Type : [
      'news', 'twitter', 'blog'
    ],
    keyword_Type : [
      'single', 'multiple'
    ],
    period_Type : [

    ],
    criteria_Type : [
      "title", "context"
    ],

    target : 'news',
    keyword : 'single',
    period : null,
    criteria : "title",
    search_value : ""
  }

  componentWillMount(){
    this._startSearch()
  }
  
  // 검색 시작 (검색함수 호출 및 저장)
  _startSearch = async() => {
    const search_Data = await this._getSearchData()
    console.log(search_Data)
    this.setState({
      search_Data
    })
  }

  // 문서 검색 함수 ADAMs.api
  _getSearchData = () => {

    return fetch("http://api.adams.ai/datamixiApi/search?key=" + this.state.apiKey 
                    + "&target=" + this.state.target 
                    + "&keyword=" + this.state.search_value
                    + "&count=5")
    .then((response) => response.json())
    .then((json) => json.return_object[0].documents)
    .catch((error) => {
      console.log("getSocial Err :" + error);
    })
  }

  // 조건 변경 => state 감지 => 검색
  _setChangeOption = (targetType, keywordType, search_data) => {

    this.setState({
      target : targetType,
      keyword : keywordType,
      search_value : search_data
    })

    this._startSearch()
  }


  // body 랜더링

  // new & blog  !! new의 category 제외
  // title / image / published_date / content

  // twitter 
  // author / tweet_id / published_date / message
  _renderBody = () => {
    return (
    <div className="App_body">
      <div className="body_trend">

      </div>
      <div className="body_context">
        { this._rederBodyController(this.state.target)}
      </div>
    </div>
    )
  }

  // body rander controller
  _rederBodyController = (target) => {
    switch(target){
      case "news" : 
      case "blog" :
        return this._rederBody_contentNB()
      case "twitter" : 
        return this._rederBody_contentT()
      default :
       console.log("renderBody Error")
    }
  }

  // news blog
  _rederBody_contentNB = () => {
      return this.state.search_Data.map((data, index) => {
        return <ContentNB 
          title = {data.fields.title}
          images = {data.fields.images}
          published_date = {data.fields.published_date}
          contentData = {data.fields.content}
          key = {index}
        />
      })
  }

  // twitter 
  _rederBody_contentT = () => {
    return this.state.search_Data.map((data, index) => {
      return <ContentT 
        author = {data.fields.author}
        tweet_id = {data.fields.tweet_id}
        published_date = {data.fields.published_date}
        message = {data.fields.message}
        key = {index}
      />
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App_nav">
          { <Navigation 
            target_Type   = { this.state.target_Type  }
            keyword_Type  = { this.state.keyword_Type }
            criteria_Type = { this.state.criteria_Type} 
            reSearch_event = { this._setChangeOption }
          /> }
        </div>
          { this.state.search_Data ? this._renderBody() : "loading" }
          
      </div>
    )
  }
}

export default App;
