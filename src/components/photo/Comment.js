import React from 'react';
class Comment extends React.Component{
    state = { comment: ''};
    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({comment:''});
        alert('Comment Added');
    }
    render(){
        return(
            <div className="comment">
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Comment Here.." value={this.state.comment} onChange={event => this.setState({comment:event.target.value})} required/>
                <button>Post</button>
            </form>
          </div>
        )
    }
}
export default Comment;