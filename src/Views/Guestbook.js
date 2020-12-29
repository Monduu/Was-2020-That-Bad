
import { useState } from 'react';
import useAxiosGet from '../Hooks/useAxiosGet';
import AxiosPost from '../Requests/AxiosPost';


function AddNewRecordForm() {
    const [author, setAuthor] = useState('');
    const [record, setRecord] = useState('');
   
    const [records, setRecords] = useState([]);

    const handleAuthorChange = (event) => setAuthor(event.target.value);
    const handleRecordChange = (event) => setRecord(event.target.value);

    const addNewRecord = () => {
        const newRecord = {
            author: author,
            record: record,
            createdAt: new Date(),
        }

        const updatedRecords = [...records, newRecord];
        setRecord(updatedRecords);
        setRecord('');
    };

    const recordsElements = records.map((record) => {
        return (
            <li>
                <strong>{record.author}, {record.createdAt}</strong>
                <br/>
                <p>{record.record}</p>
            </li>
        );
    })

    // const tasks = useAxiosGet('tasks');

    // let content = '';
    // if (tasks.loading) {
    //     content = <h4>Loading...</h4>
    // } else if (tasks.data.lenght === 0) {
    //     content = <h4> No tasks to do. Yey!</h4>
    // } else {
    //     content = (
    //         <ul className="list-group">
    //             {tasks.data.map((task) => <li>{task.description}</li>)}
    //         </ul>
    //     )
    // }


    // const addNewTask = async () => {
    //     setLoading(true);
    //     setErrors([]);
    //     let errorsForForm = [];
    //     if (title === '') {
    //         errorsForForm.push('Please entera title');
    //     }

    //     if (errorsForForm.length > 0) {
    //         setErrors(errorsForForm);
    //         setLoading(false);
    //         return;
    //     }

    //     await AxiosPost('tasks', {
    //         title,
    //         description
    //     });
    //     setLoading(false);
    //     setTitle('');
    //     setDescription('');

    // };

    // const saveButtonText = loading ? 'Loading...' : "Add task";

    // let errorsElement = '';
    // if (errors.lenght > 0) {
    //     errorsElement = (
    //         <div className="alert alert-danger">
    //             <ul>
    //                 {errors.map((error, index) => <li key={index}>{error}</li>)}
    //             </ul>
    //         </div>
    //     );
    // }


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
                <textarea value={record} onChange={handleRecordChange} className="form-control" id="new-record-description"></textarea>
            </div>
            <div className="form-group">
                <button onClick={addNewRecord} className="btn btn-outline-success btn-inverse">Send</button>

            </div>
        </div>

    );


}

export default AddNewRecordForm; 