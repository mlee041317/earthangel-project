import React, { Component } from 'react';
import CreateEntry from '../components/CreateEntry';
import JournalEntries from '../components/JournalEntries';
import JournalEntryModel from '../models/JournalEntryModel';

class JournalContainer extends Component {
    state= {
        title: '',
        content: '',
        journalentries: [],
    }

    fetchjournalEntries = () => {
        JournalEntryModel.all().then((res) => {
            console.log('fetchjournalEntries ---> ', res);
            this.setState ({
                journalentries: res.data.entries,
            });
        });
    };

    componentDidMount() {
        this.fetchjournalEntries();
    };

    createJournalEntry = (journalentry) => {
        JournalEntryModel.create(journalentry).then((res) => {
            console.log(res);
            console.log('createJournalEntry ===> ');
            let currentJournalEntries = [...this.state.journalentries];
            currentJournalEntries.push(res.data.entry);
            this.setState({
                journalentries: currentJournalEntries
            });
        })
    }

    deleteEntry = (id) => {
        console.log('deleteEntry ===> ', id);
        JournalEntryModel.delete(id).then((res) => {
            let updatedJournalEntries = this.state.journalentries.filter((entry) => {
                return entry._id !== id;
            });
            this.setState({
                journalentries: updatedJournalEntries
            });
        });
    };

    editEntry = (journalentry, journalentryid) => {

                let updatedJournalEntries = [...this.state.journalentries];
                const editedJournal = updatedJournalEntries.find(entry => {
                    return entry._id === journalentryid 
                });
                editedJournal.content = journalentry
                JournalEntryModel.update(editedJournal).then((res) => {
                    console.log(res);
                    updatedJournalEntries = updatedJournalEntries.filter(
                        entry => entry._id !== editedJournal._id
                    )
                    updatedJournalEntries.push(editedJournal)
                    this.setState({ journalentries: updatedJournalEntries });
                    console.log(updatedJournalEntries);
                })
            
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