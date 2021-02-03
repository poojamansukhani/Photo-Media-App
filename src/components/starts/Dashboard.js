import React, { Component } from 'react';
import {PhotoGallery} from "../photo/PhotoGallery";
import {PhotoTopAction} from "../photo-top-action/PhotoTopAction";
import _ from 'underscore';
export class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      tempData:[],
      tempComment:[],
      toggle:false
    }
  }
  handleSearch = (e) => {
    var value = e.target.value;
    if(this.state.data.length){
      const filteredData = this.state.data.filter((item)=> {
        return (item.category).toLowerCase() === value.toLowerCase()
      });
      this.setState({
        tempData:filteredData,
      })
    }
   
  }
  
  handleLiked = () =>{
    if(this.state.toggle==true){
      const tempData = _.sortBy( this.state.data, 'likes' );
      this.setState({
        tempData:tempData.reverse()
      })
    }
    else{
      this.setState({
        tempData:[]
      })
    }
    this.setState({toggle:!this.state.toggle})
  }
  handleComment = () => {
    if(this.state.toggle === true){
      const tempComment = _.sortBy(this.state.data, 'comments');
      this.setState({
        tempComment:tempComment.reverse()
      })
    }
    else{
      this.setState({
        tempComment:[]
      })
    }
    this.setState({toggle:!this.state.toggle})
  }
   componentDidMount(){
        fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json")
        .then(response => response.json())
        .then(data => this.setState({data:data.pics}))
    }
    render() {
    const headingStyle = {
        color: "#020276",
        backgroundColor: "#ababfe",
        padding: "5px",
        margin:"0",
        borderBottom:"1px solid #6666b4"
    };
      return(
        <React.Fragment>
            <div className="container">
                <h6 className="text-center" style={headingStyle}>Imaginary</h6>
                <PhotoTopAction handleSearch={this.handleSearch} handleLiked={this.handleLiked} handleComment={this.handleComment}/>
                {/* <PhotoGallery data={this.state.data}/> */}
                { this.state.tempData.length > 0 ? <PhotoGallery data={this.state.tempData} /> : <PhotoGallery data={this.state.data} /> }

            </div>
        </React.Fragment>
      )
    }
  
  }
  
export default Dashboard;