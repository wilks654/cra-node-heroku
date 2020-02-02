import React, {Component} from 'react'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import './ThumbnailContainer.css'

export class ThumbnailContainer extends Component {

    render() {
        return (
            <div id = 'thumbnail-container' onClick = {() => this.props.linkTo()}>
                <div id = 'thumbnail-container-header'>
                    <h3>{this.props.header}</h3>
                </div>
                <div id = 'thumbnail-container-body'>
                    {this.props.body}
                </div>
            </div>
        )
    }
}


      