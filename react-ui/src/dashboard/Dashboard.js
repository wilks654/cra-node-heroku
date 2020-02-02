import React, {Component} from 'react'
import {connect} from "react-redux"
import {getWeather} from '../actions/weather'
import {getNews} from '../actions/news'
import {getClothes} from '../actions/clothes'
import {withRouter} from "react-router-dom"
import {ThumbnailContainer} from "./ThumbnailContainer"
import {
    PieChart, Pie, Legend, Tooltip,
  } from 'recharts';


import './Dashboard.css'
import {linkTo} from "../helper-functions"
import {parseBBCFeed} from "../helper-functions"

class Dashboard extends Component {

    constructor(props) {
      super(props)
      this.state = {
          loadingData : true
      }
    }

    async componentDidMount() {

        let {dispatch} = this.props

        // await dispatch(getWeather()),
        await Promise.all([
            await dispatch(getNews()),
            await dispatch(getClothes())
        ])
        
        this.setState({loadingData : false})
    }


    weatherBody = () => {
        /*
        temperature: 10.240000000000009
        weatherIdCode: 500
        */

        let {temperature, weatherIdCode} = this.props.weather.weather

        let weatherIconUrl;

        //Get weather icon
        switch(weatherIdCode) {
            case weatherIdCode === 800:
                weatherIconUrl = 'Sun_icon.png'
              break;
            case weatherIdCode > 499 && weatherIdCode < 532:
                weatherIconUrl = 'Rain_icon.png'
              break;
            default:
                weatherIconUrl = 'Clouds_icon.png'
          }
        
        weatherIconUrl  = './assets/' + weatherIconUrl
        
        return (
            <div>
                <div className = 'cloud'  />
                <div id ='temperature'>
                    <div>
                        {Math.round(temperature)}
                    </div>
                    <div>degrees</div>
                </div>
                <div id = 'weather-location'> London </div>
            </div>    
        )  

    }
    
    newsBody = () => {
       let { title,
        description} = this.props.news.news
        console.log('title' + title)
        console.log('desc' + description)
        return (
            <div className = 'listed'>
                <h3>{title}</h3>
                <div>{description}</div>
            </div>    
        )
    }

    tasksBody = () => {
        let tasks = this.props.tasks.tasks

        let body = []

        for (let i = 0; i < tasks.length && i < 3; i++) {
            body.push(
                <div>
                    {tasks[i]}
                </div>)
        }

        return (
            <div className = 'listed'>
                {body}
            </div> )

    }

    sportsBody = () => {
        return (
            <div className = 'listed'>
                <h3>Woo Sports</h3>
                <div>Woo sports descriptions</div>
            </div>    
        )
    }

    clothesBody = () => {
        let {clothes} = this.props.clothes
       

        let dataArray = []


        for (let prop in clothes) {
            if (Object.prototype.hasOwnProperty.call(clothes, prop)) {
                
                dataArray.push({
                    name : prop,
                    value : clothes[prop].d
                })
            }
        }

        return (
            <PieChart width={300} height={300}>
                <Pie dataKey="value" data={dataArray} cx={145} cy={90} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
            </PieChart>
        )

    }

    render() {
        return <div id = 'dashboard-container'>
            
            <h1>Good day, {this.props.userName}</h1>


            {this.state.loadingData ? (
                <div>Loading data</div>
            ) : (
            <div id = 'dashboard-thumbnail-container'>
                
                <div className = 'flex-row'>
                    <ThumbnailContainer 
                        header = 'weather'
                        linkTo = {() => console.log('news')}
                    />
                    
                    <ThumbnailContainer 
                        header = 'news'
                        body = {this.newsBody()}
                        linkTo = {() => linkTo('news', this.props)}
                    />
                   
                    <ThumbnailContainer 
                        header = 'sport'
                        body = {this.sportsBody()}
                        linkTo = {() => console.log('news')}
                    />
                </div >
                <div className = 'flex-row'>
                    <ThumbnailContainer 
                        header = 'photos'
                        linkTo = {() => linkTo('images', this.props)}
                    />

                    <ThumbnailContainer 
                        header = 'tasks'
                        body = {this.tasksBody()}
                        linkTo = {() => linkTo('tasks', this.props)}
                    />

                    <ThumbnailContainer 
                        header = 'clothes'
                        body = {this.clothesBody()}
                        linkTo = {() => console.log('news')}
                    />
                </div>
            </div>
            )}
        </div>
    }
}

const mapStateToProps = state => {
    const {login, weather, news, clothes,tasks} = state
    const {userName} = login

    return {
        userName, weather, news, clothes, tasks
    }
    
}
      
export default withRouter(connect(mapStateToProps)(Dashboard))  