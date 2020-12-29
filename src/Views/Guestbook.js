
import { useState, useEffect } from 'react';
import useAxiosGet from '../Hooks/useAxiosGet';
import AxiosPost from '../Requests/AxiosPost';


function AddNewRecordForm() {
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const [records, setRecords] = useState([]);
    const handleAuthorChange = (event) => setAuthor(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const addNewRecord = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (author === '') {
            errorsForForm.push('Please enter an author');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return;
        }

        await AxiosPost('guestbook-records', {
            author,
            description
        });
        setLoading(false);
        setAuthor('');
        setDescription('');

    };

    const saveButtonText = loading ? 'Loading...' : "Add task";

    let errorsElement = '';
    if (errors.lenght > 0) {
        errorsElement = (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }


    const response = useAxiosGet('guestbook-records');
    let recordsElements = ''
    if (response.loading) {
    } else if (response.data.lenght === 0) {
    } else {
        recordsElements = response.data.map((record, index) => {
            return (
                <li key={index}>
                    <strong>{record.author}, {record.createdAt}</strong>
                    <br />
                    <p>{record.description}</p>
                </li>
            );
        })

    }

  

    return (
        <div>
            <div>
                {recordsElements}
            </div>

            <div className="form-group">
                <label htmlFor="new-record-author">Author</label>
                <input value={author} onChange={handleAuthorChange} type="text" className="form-control" id="new-record-author"></input>
            </div>
            <div className="form-group">
                <label htmlFor="new-record-description">Record</label>
                <textarea value={description} onChange={handleDescriptionChange} className="form-control" id="new-record-description"></textarea>
            </div>
            <div className="form-group">
                <button onClick={addNewRecord} className="btn btn-outline-success btn-inverse">Send</button>

            </div>
        </div>

    );


}

export default AddNewRecordForm; 