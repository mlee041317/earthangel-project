import React from 'react';
import moment from 'moment';
import EditEntry from './EditEntry';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


class JournalEntry extends React.Component {
    state = {
        isEditClicked: false,
        title: '',
        content: '',
        journalentry: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            formStyle: {
                display: 'none',
            },
        };
    };


    deleteClickedEntry = (event) => {
        console.log(this.props.journalentry._id);
        this.props.deleteEntry(this.props.journalentry._id);
    }
    
    toggleBodyForm = () => {
        this.setState({
            isEditClicked: true
        })
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none'} })
        : this.setState({ formStyle: {display: 'block'} });
    };

    // handleClick = (event) => {
    //     this.setState({
    //         isEditClicked: true
    //     })
    //     console.log('Edit JournalContainer state');
    // }

    render() {
        let momentDate = moment(this.props.journalentry.createdAt);
        let relativeDate = momentDate.fromNow();

        return(
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                        <Card.Title><h4>Intention Setting: {this.props.journalentry.title}</h4></Card.Title>     
                        <Card.Text><p>Self-Reflection: {this.props.journalentry.content}</p></Card.Text>                         
                        <Card.Text><label htmlFor="">Date: {relativeDate}</label></Card.Text> 
                        <Card.Link><button onClick={this.toggleBodyForm}>Edit</button></Card.Link>
                        <Card.Link><button onClick={() => this.deleteClickedEntry(this.props.journalentry._id)}>Delete</button></Card.Link>
                    <Container>           
                        <EditEntry
                            journalentryid={this.props.journalentry._id}
                            style={this.state.formStyle}
                            autoFocus={true}
                            buttonName="Update Entry"
                            editEntry={this.props.editEntry}
                            toggleBodyForm={this.toggleBodyForm} />       
                    </Container>   
                </Card.Body>
            </Card> 
        )    
    }
};

export default JournalEntry;
