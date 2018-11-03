import React, { Component } from 'react';
import './App.css';
import Navigation from './navComponent/navigation'
import ContentNB from './bodyComponent/contentNB'
import ContentT from './bodyComponent/contentT'
import TopicTrendRank from './bodyComponent/topicTrendRank'
import TrendGraph from './bodyComponent/trendGraph'
import CircularProgress from '@material-ui/core/CircularProgress'

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
    search_value_second : "",

    search_count : "30",

    loading : false
  }

  componentWillMount(){
    this._startSearch()
  }

  // state 의 loading 값을 변경
  _setLoadingValue = (bool) => {
    this.setState({
      loading : bool
    })
  }

   // 조건 변경 => state 감지 => 검색
   _setChangeOption = (targetType, keywordType, search_data, search_value_data) => {

    this.setState({
      target : targetType,
      keyword : keywordType,
      search_value : search_data,
      search_value_second : search_value_data
    })

    this._startSearch()
  }

  // 2중 키워드 문서 정리
  _multipleDOMSearch = (datas) =>{

    let rewriteDatas = new Array()
    //console.log(argData)
  
    // 해당하는 것으로 교체
    for(let addr in datas){
      // console.log(datas[addr].fields.content[0].includes(this.state.search_value_second))
      if(datas[addr].fields.content[0].includes(this.state.search_value_second) || 
      datas[addr].fields.title[0].includes(this.state.search_value_second)){
        rewriteDatas.push(datas[addr])
      }
    }

    let argContent = null
    // 형광팬 처리
    for(let addr in rewriteDatas){

      let ContentData = new Array()
      // 나중에 따로 함수화
      // 내용 (첫번째 키워드)
      if(rewriteDatas[addr].fields.content[0].indexOf(this.state.search_value)){
        // 키워드를 기준으로 분리
        ContentData = rewriteDatas[addr].fields.content[0].split(this.state.search_value)
        // 재조합
        for(let contentAddr=0; contentAddr < ContentData.length; contentAddr++){
          if(contentAddr >= ContentData.length -1){
            // 마지막엔 그냥 붙이기
            argContent += ContentData[contentAddr]
          }else{
            argContent += ContentData[contentAddr] + "<span style='background-color:yellow'>" + this.state.search_value + "</span>"
          }
        }
        rewriteDatas[addr].fields.content[0] = argContent
        console.log(argContent)
      }

      // 두번째 키워드
      if(rewriteDatas[addr].fields.content[0].indexOf(this.state.search_value_second)){
        // 키워드를 기준으로 분리
        ContentData = rewriteDatas[addr].fields.content[0].split(this.state.search_value_second)
        // 재조합
        for(let contentAddr=0; contentAddr < ContentData.length; contentAddr++){
          if(contentAddr >= ContentData.length -1){
            // 마지막엔 그냥 붙이기
            argContent += ContentData[contentAddr]
          }else{
            argContent += ContentData[contentAddr] + "<span style='background-color:#00FEFE'>" + this.state.search_value_second + "</span>"
          }
        }
        rewriteDatas[addr].fields.content[0] = argContent
        console.log(argContent)
      }
    }

    //console.log(rewriteDatas)
    return rewriteDatas;
  }

  // 검색 시작 (검색함수 호출 및 저장)
  _startSearch = async() => {
    this._setLoadingValue(true)
    /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
    // 기본 문서
    let search_Data = await this._getSearchData()


    // keyword(Type) = mutiple
    if(this.state.keyword === "multiple"){
      let argData = new Array()
      // console.log(await this._multipleDOMSearch(search_Data))
      argData.push(await this._multipleDOMSearch(search_Data))
      // Reset search_Data
      search_Data = []
      search_Data = argData.pop()

      console.log(search_Data)
    }

    switch(this.state.target){
      case 'news' :
        // 첫 번째 줄만 줄바꿈 후, 다음 문장을 띄어쓰기 해준다.
        for(let start in search_Data){
          search_Data[start].fields.content[0] = search_Data[start].fields.content[0].replace('\n', '<br />&nbsp&nbsp')
          // /(\n|\r\n)/g
        }
        break;
      case 'blog' :
        // 모든 문장을 줄바꿈처리한다.
        for(let start in search_Data){
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
    
    // 문서의 날짜값 정리
    for(let data in search_Data){
      let argDate = search_Data[data].fields.published_date[0].split("T")  
      search_Data[data].fields.published_date[0] = argDate[0] 
    }

    // 문서 저장
    this.setState({
      search_Data
    })

    /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */

    // 연관검색어 (키워드 유무 확인)
    if(this.state.search_value !== ""){
      const topicTrendData = await this._getTopicTrendData()
      // 연관검색어 저장
      this.setState({
        topicTrendData
      })

    /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
      // 기간별 검색 횟수
      const topicCountData = await this._getTrendSearchCount()

      let TrendGraphDate = new Array([]);
      let TrendGraphCount = new Array([]);

      // 문서의 날짜값 정리
      for(let data in topicCountData){
        let argDate = topicCountData[data].date.split("T")  
        topicCountData[data].date = argDate[0] 

        //
        let argDate2 = topicCountData[data].date.split('-')
        let argDate3 = argDate2[1] + "/" + argDate2[2]
        TrendGraphDate.push( argDate3 )
        TrendGraphCount.push( topicCountData[data].orgCount )
        
      }

      //console.log(TrendGraphDate)
      //console.log(TrendGraphCount)

      // 저장
      this.setState({
        TrendGraphDate,
        TrendGraphCount
      })
    }
    /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
    this._setLoadingValue(false)
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

  // 연관 검색어  ADAMs.api
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

  // 검색 빈도(횟수) ADAMs.api
  _getTrendSearchCount = () => {
    return fetch("http://api.adams.ai/datamixiApi/trend?key=" + this.state.apiKey 
                    + "&target=" + this.state.target
                    + "&keyword=" + this.state.search_value
                    + "&timeunit=day" )
    .then((response) => response.json())
    .then((json) => json.return_object.trend[0].data)
    .catch((error) => {
      console.log("getTrendSearch Err :" + error)
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
    <div className="body">
      <div className="body_trend">
        { this.state.topicTrendData ? this._renderBody_topicTrend() : "not data"}
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
        <div className="navigation">
          { <Navigation 
            target_Type   = { this.state.target_Type  }
            keyword_Type  = { this.state.keyword_Type }
            criteria_Type = { this.state.criteria_Type} 
            reSearch_event = { this._setChangeOption }
          /> }
        </div>
        { this.state.loading ?
        <div className="App_body_loading"> 
          <CircularProgress size={100} /> 
        </div> 
        :  
        <div className="App_body">
          { this.state.search_Data ? this._renderBody() : "loading" }
 
          <TrendGraph 
            scaleX = {this.state.TrendGraphDate}
            scaleY = {this.state.TrendGraphCount}
          />
        </div>
        }
      </div>
    )
  }
}

export default App;
