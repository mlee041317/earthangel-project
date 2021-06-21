import React from 'react';
import JournalEntry from './JournalEntry';

class JournalEntries extends React.Component {
    render() {
        let journalentries = this.props.journalentries.map((journalentry) => {
                console.log('JournalEntry in JournalEntries ===> ', journalentry);

            return (
        <JournalEntry
                key={journalentry._id}
                journalentry={journalentry}
                deleteEntry={this.props.deleteEntry}        
            />)

        })

        return (
            <ul>
                {journalentries}
            </ul>
        )
    }
}

export default JournalEntries; 