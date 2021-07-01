import axios from 'axios';

// const endPoint = `http://localhost:4000/api/v1/entries/`;
const endPoint = `https://earthangel.herokuapp.com/api/v1/entries/`;

class JournalEntryModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static create = (journalentry) => {
        let request = axios.post(endPoint, journalentry);
        return request;
    };

    static delete = (id) => {
        let request = axios.delete(`${endPoint}/${id}`);
        return request;
    };

    static update = (journalentry) => {
        let request = axios.put(`${endPoint}/${journalentry._id}`, journalentry);
        return request;
    };

};


export default JournalEntryModel;