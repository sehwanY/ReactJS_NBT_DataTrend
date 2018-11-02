import React, { Component } from 'react';
import './App.css';
import Navigation from './navComponent/navigation'
import ContentNB from './bodyComponent/contentNB'
import ContentT from './bodyComponent/contentT'
import TopicTrendRank from './bodyComponent/topicTrendRank'
import TrendGraph from './bodyComponent/trendGraph'

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
    search_value : "삼성",
    search_count : "30"
  }

  componentWillMount(){
    this._startSearch()
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

  // 검색 시작 (검색함수 호출 및 저장)
  _startSearch = async() => {
    // 기본 문서
    const search_Data = await this._getSearchData()

    switch(this.state.target){
      case 'news' :
        // 첫 번째 줄만 줄바꿈 후, 다음 문장을 띄어쓰기 해준다.
        for(let start = 0; start < search_Data.length; start++){
          search_Data[start].fields.content[0] = search_Data[start].fields.content[0].replace('\n', '<br />&nbsp&nbsp')
          // /(\n|\r\n)/g
        }
        break;
      case 'blog' :
        // 모든 문장을 줄바꿈처리한다.
        for(let start = 0; start < search_Data.length; start++){
          search_Data[start].fields.content[0] = search_Data[start].fields.content[0].replace(/(\n|\r\n)/g, '<br />&nbsp&nbsp')
          // /(\n|\r\n)/g 
        }
        break;
      case 'twitter' :
        break;
      default : 
        console.log("replaceDOM Error_startSerch funtion")
        break;

    }
    
    // 문서 저장
    this.setState({
      search_Data
    })

    // 연관검색어 (키워드 유무 확인)
    if(this.state.search_value !== ""){
      const topicTrendData = await this._getTopicTrendData()
      // 연관검색어 저장
      this.setState({
        topicTrendData
      })
    }

  }

  // 문서 검색 함수 ADAMs.api
  _getSearchData = () => {
    return fetch("http://api.adams.ai/datamixiApi/search?key=" + this.state.apiKey 
                    + "&target=" + this.state.target 
                    + "&keyword=" + this.state.search_value
                    + "&count=" + this.state.search_count)
    .then((response) => response.json())
    .then((json) => json.return_object[0].documents)
    .catch((error) => {
      console.log("getSocial Err :" + error);
    })
  }

  // 연관 검색어
  _getTopicTrendData = () => {
    return fetch("http://api.adams.ai/datamixiApi/topictrend?key=" + this.state.apiKey 
                    + "&target=" + this.state.target 
                    + "&keyword=" + this.state.search_value)
    .then((response) => response.json())
    .then((json) => json.return_object.trends[json.return_object.trends.length - 1].nodes)
    .catch((error) => {
      console.log("getTopicTrend Err :" + error);
    })
  }

  // body 랜더링

  // new & blog  !! new의 category 제외
  // title / image / published_date / content

  // twitter 
  // author / tweet_id / published_date / message

  // { this._renderBody_topicTrend() }
  _renderBody = () => {
    return (
    <div className="App_body">
      <div className="body_trend">
        { this.state.topicTrendData ? this._renderBody_topicTrend() : "not data"}
      </div>
      <div className="body_context">
        { this._rederBodyController(this.state.target)}
        <TrendGraph />
        <div id="chart"></div>
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

  // 연관검색어
  _renderBody_topicTrend = () => {
    return this.state.topicTrendData.map((data) => {
      return <TopicTrendRank 
        rankTitle = {data.name}
        rank = {data.id}
        key = {data.id}
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
