import React, { Component } from 'react';

class EditEntry extends Component {
    constructor() {
        super();
        this.state = {
            edit: '',
        };
    };

    onChange = (event) => {
        this.setState({
            edit: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const edit = this.props.edit;
        edit.body = this.state.edit;
        this.props.updateEntry(entry);
        this.setState({ edit: '' });
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
                        value={this.state.edit} />
                    <button type='submit'>Save</button>    
                </form>
            </div>
        );
    };  
}

export default EditEntry;