import React, { Component } from 'react';

class EditEntry extends Component {
    constructor() {
        super();
        this.state = {
            journalentry: '',
        };
    };

    onChange = (event) => {
        this.setState({
            journalentry: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.editEntry(this.state.journalentry, this.props.journalentryid);
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
                                value={this.state.journalentry} />
                            <button type='submit'>Save</button>    
                        </form>
                    </div>
        
        );
    };  
}

export default EditEntry;