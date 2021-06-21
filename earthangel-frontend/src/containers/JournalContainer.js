import React, { Component } from 'react';
import CreateEntry from '../components/CreateEntry';
import JournalEntries from '../components/JournalEntries';

class JournalContainer extends Component {
    state= {
        name: '',
        posts: '',
    }

    createJournalEntry = () => {
        let currentJournalEntries = this.state.entries;
        currentEntries.push(newJournalEntry);
        this.setState({
            entry: currentJournalEntries
        });
    }

    deleteEntry = () => {
        let updatedEntries = this.state.entries.filter((entry) => {
            return entry._id !== deletedEntry._id;
        });
        this.setState({
            entries: updatedEntries
        })
    }

    render() {
        return(
            <main>
                <JournalEntries journalentries={this.state.entries} deleteEntry={this.deleteEntry}/>
                <CreateEntry entryId={this.props.entryId} createEntryPost={this.createEntryPost}/>
            </main>
        )
    }
}

export default JournalContainer;