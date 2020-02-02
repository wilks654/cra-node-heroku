import React, {Component} from 'react'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import './images.css'

class Images extends Component {

    constructor(props) {
      super(props)
      this.state = {
          loadingData : true
      }
    }

    
    
    handleFileUpload = (e) => {
    
           let imageFile = e.target.files[0];
           var reader  = new FileReader();
       
           //This is to be called when dataurl of file upload has been read
           //TODO look into array buffers to downscale image size 

           reader.onloadend = function (e) {
             var image = new Image();
             image.src = e.target.result;
             image.onload = function(ev) {
               
               //document.getElementById("images").appendChild(image)
               let canvas = document.getElementById('canvas')
               image.width = canvas.width
               image.height = canvas.height
               let ctx = canvas.getContext('2d')
               

               //clear previous image
               ctx.clearRect(0, 0, canvas.width, canvas.height);
               //image, offset, offset, dimension, dimension
               ctx.drawImage(image, 0, 0, image.width, image.height)
               
             }
           }

           //
           reader.readAsDataURL(imageFile)
       
         
    }

    

    render() {
        return <div id ='images-container'>
            <canvas id = 'canvas' ref="canvas" width={280} height={280} />
            <input type = 'file' onChange = {(e) => this.handleFileUpload(e)}  accept="image/x-png,image/gif,image/jpeg" />
        </div>
    }
}

const mapStateToProps = state => {

    return {
        
    }
    
}
      
export default withRouter(connect(mapStateToProps)(Images))  