import React from 'react';
var moment = require('moment');

class JournalEntry extends React.Component {
    state = {
        isEditClicked: false,
        title: '',
        content: '',
    }

    deleteClickedEntry = (event) => {
        this.props.deleteEntry(this.props.journalentry._id);
    }
    
    handleClick = (event) => {
        this.setState({
            isEditClicked: true
        })
        console.log('Update JournalContainer state');
    }

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
                    <button onClick={this.handleClick}>Edit</button>
                    <button onClick={this.deleteClickedPost}>Delete</button>
                </div>
                
            </div>
        )
    }
}

export default JournalEntry;
