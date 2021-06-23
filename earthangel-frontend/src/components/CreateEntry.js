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
                <Form className="container" onSubmit={ this.onEntrySubmit }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Intention Setting</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.onInputChange} placeholder="Set Your Intentions" />
                    <Form.Text className="text-muted">
                        It's a beautiful day to be alive.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Self Reflection</Form.Label>
                    <Form.Control type="text" name="content" onChange={this.onInputChange} placeholder="Let's Reflect" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

        )
    }
}

export default CreateEntry;