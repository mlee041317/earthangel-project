import React, { Component } from 'react';

class CreateEntry extends Component {
        state = {
            title: '',
            content: '',
        }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onEntrySubmit = (event) => {
        event.preventDefault()
        let journalEntry = this.state;
        console.log('entryId in CreateEntry', this.props.entryId)
        console.log('journalEntry in CreateEntry', journalEntry)
        
        this.props.createEntry(journalEntry)
        .then( () => {
            this.setState({
                title: '',
                content: '',
            })
        }).catch((err) => {
            console.err('Failed to post entry');
        })
    }

        render(){
            return (
            <form onSubmit={ this.onEntrySubmit } id="entryForm" className="row">
                <div className="column entry-box">
                    <input onChange={this.onInputChange}
                    type="text"
                    placeholder="Set your intentions..."
                    value={this.state.title}
                    name="title"
                    />
                    <textarea  
                    onChange={ this.onInputChange } 
                    type="text" id="entryContent" 
                    placeholder="Let's reflect..." 
                    value={this.state.content}
                    name="content"
                    ></textarea>
                </div>
                    <button type="submit" id="addEntry" className="btn">Add Entry</button>
            </form>

        )
    }
}

export default CreateEntry;