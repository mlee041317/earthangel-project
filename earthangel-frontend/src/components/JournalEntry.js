import React from 'react';
import moment from 'moment';

class JournalEntry extends React.Component {
    state = {
        isEditClicked: false,
        title: '',
        content: '',
        formStyle: {
            display: 'none',
        },
    };


    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ?    this.setState({ formStyle: {display: 'none'} })
        :    this.setState({ formStyle: {display: 'block'} });
    };

    deleteClickedEntry = (event) => {
        console.log(this.props.journalentry._id);
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
                    <button onClick={this.deleteClickedEntry}>Delete</button>
                </div>
                <EditForm
                    edit={this.props.edit}
                    style={this.state.formStyle}
                    autoFocus={true}
                    buttonName="Update Entry"
                    updateEntry={this.props.updateEntry}
                    toggleBodyForm={this.toggleBodyForm} />
                
            </div>
        );
    }
};



export default JournalEntry;
