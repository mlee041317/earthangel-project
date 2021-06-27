import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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
        console.log('journalEntry in CreateEntry', journalEntry)
        this.props.createJournalEntry(journalEntry)
    }

        render(){
            return (
                <div className="create-entry d-flex justify-content-md-end align-items-center">
                    <Form className="container" id="create-form" onSubmit={ this.onEntrySubmit }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="journal-title">Set your intentions</Form.Label>
                        <Form.Control type="text" name="title" onChange={this.onInputChange} placeholder="I intend to manifest..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label id="journal-content">Self reflection</Form.Label>
                            <Form.Control type="text" name="content" onChange={this.onInputChange} placeholder="I am aware of..." />
                        </Form.Group>
                        <Button id="create-button" type="submit">
                            enter
                        </Button>
                    </Form>
                </div>

        )
    }
}

export default CreateEntry;