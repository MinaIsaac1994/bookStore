import React, {Component} from 'react';


class OptionMenu extends Component {

    state={
        shelf:''
    };

    

    render(){
       
       return(
            <div className="book-shelf-changer">
                <select 
                value={`${this.props.shelf.shelf}`}
                //value={this.state}
                onChange={(e) => {
                    this.props.handleUpdate(this.props.shelf,e.target.value);                    
                } }
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
        </div>
    )}
}

export default OptionMenu