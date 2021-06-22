import React, { Component } from 'react';

class EditEntry extends Component {
    constructor() {
        super();
        this.state = {
            journalentries: '',
        };
    };

    onChange = (event) => {
        this.setState({
            journalentries: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const journalentries = this.props.journalentries;
        journalentries.body = this.state.journalentries;
        this.props.editEntry(entry);
        this.setState({ journalentries: '' });
        this.props.toggleBodyForm();
    };

    render() {
        return (
            <div style={this.props.style} className='editForm'>
                <form onSubmit={ this.onSubmit }>
                    <input
                        autoFocus={this.props.autoFocus}
                        onChange={ this.onChange }
                        placeholder="Let's reflect..."
                        type='text'
                        value={this.state.journalentries} />
                    <button type='submit'>Save</button>    
                </form>
            </div>
        );
    };  
}

export default EditEntry;