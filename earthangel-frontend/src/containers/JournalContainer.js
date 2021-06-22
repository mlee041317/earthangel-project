import React, { Component } from 'react';
import CreateEntry from '../components/CreateEntry';
import JournalEntries from '../components/JournalEntries';

class JournalContainer extends Component {
    state= {
        name: '',
        posts: '',
        journalentries: [],
    }

    createJournalEntry = (journalentry) => {
        console.log('createJournalEntry ===> ');
        let currentJournalEntries = this.state.journalentries;
        //DELETE LINE 16 WHEN DB IS SENT IN.
        journalentry._id = Date.now()
        currentJournalEntries.push(journalentry);
        this.setState({
            journalentries: currentJournalEntries
        });
    }

    deleteEntry = (id) => {
        console.log('deleteEntry ===> ', id);
        let updatedJournalEntries = this.state.journalentries.filter((entry) => {
            return entry._id !== id;
        });
        this.setState({
            journalentries: updatedJournalEntries
        })
    }

    editEntry = (journalentry, journalentryid) => {
                let updatedJournalEntries = [...this.state.journalentries];
                const editedJournal = updatedJournalEntries.find(entry => {
                    return entry._id === journalentryid 
                });
                editedJournal.content = journalentry
                updatedJournalEntries = updatedJournalEntries.filter(
                    entry => entry._id !== editedJournal._id
                )
                updatedJournalEntries.push(editedJournal)
                this.setState({ journalentries: updatedJournalEntries });
                console.log(updatedJournalEntries);
            // });
    };


    render() {
        return(
            <main>
                <JournalEntries journalentries={this.state.journalentries} deleteEntry={this.deleteEntry} editEntry={this.editEntry}/>
                <CreateEntry entryId={this.props.entryId} createJournalEntry={this.createJournalEntry}/>
            </main>
        )
    }
}

export default JournalContainer;