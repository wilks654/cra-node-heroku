import React, {Component} from 'react'
import {connect} from "react-redux"
import {getWeather} from '../actions/weather'
import {getNews} from '../actions/news'
import {getClothes} from '../actions/clothes'
import {withRouter} from "react-router-dom"

import {
    PieChart, Pie, Legend, Tooltip,
  } from 'recharts';


import './News.css'
import {linkTo} from "../helper-functions"
import {parseBBCFeed} from "../helper-functions"

class News extends Component {

    constructor(props) {
      super(props)
      this.state = {
          loadingData : true
      }
    }
    
   

  

    render() {
        let { title,
            description} = this.props.news.news
        return (<div id = 'news-container'>
                <h3 className = 'absolute-top-left'>News</h3>
                <div id = 'news-container-image' />
                <h3 className = 'big'>{title}</h3>
                <div>{description}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { news } = state
 

    return {
       news
    }
    
}
      
export default withRouter(connect(mapStateToProps)(News))  