import React, { Component } from 'react';
import moment from 'moment';
import EditEntry from './EditEntry';

class JournalEntry extends React.Component {
    state = {
        isEditClicked: false,
        title: '',
        content: '',
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
            <div className="entry-box row">
                <div className="column entry-text">
                    <div className="row entry-title">
                        <h4>{this.props.journalentry.title}</h4>
                        <label className="date-text" htmlFor="">Date: {relativeDate}</label>
                    </div>
                    <p>{this.props.journalentry.content}</p>
                </div>
                <div className="column entry-buttons">
                    <label htmlFor="">Date: {relativeDate}</label>
                    <button onClick={this.toggleBodyForm}>Edit</button>
                    <button onClick={this.deleteClickedEntry}>Delete</button>
                </div>            
                <EditForm
                    journalentries={this.props.journalentries}
                    style={this.state.formStyle}
                    autoFocus={true}
                    buttonName="Update Entry"
                    editEntry={this.props.editEntry}
                    toggleBodyForm={this.toggleBodyForm} />       
            </div>
        );
    }
};

export default JournalEntry;
