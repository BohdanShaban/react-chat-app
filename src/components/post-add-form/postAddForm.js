import React, {Component} from "react";

import './post-add-form.css';

export default class PostAddForm extends Component {

    state = {
        inputTxt: ''
    };

    onValueChange_0__Example = (e) => {
        this.setState( ({inputTxt}) => {
            return { inputTxt: e.target.value }
        })
    }
    onValueChange = (e) => {
        this.setState({ inputTxt: e.target.value }); // IMMUTABLE !!!
        //console.log( `PostAddForm Comp, onValueChange(), inputTxt: ${this.state.inputTxt}`);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onPostAdd(this.state.inputTxt);
        this.setState({ inputTxt: '' }); // IMMUTABLE !!!
    }

    render() {

        return (
            <form   className='d-flex bottom-panel'
                    onSubmit={this.onSubmit}>
                
                <input  className="form-control new-post-label" 
                        placeholder="Input Your New Message..."
                        type="text"
                        onChange={this.onValueChange}
                        value={this.state.inputTxt} // CONTROLLED REACT COMP: State Improves on Comp
                        
                ></input>
    
                <button className='btn btn-outline-secondary' type="submit">Send</button>
    
            </form>
        )
    }
}

