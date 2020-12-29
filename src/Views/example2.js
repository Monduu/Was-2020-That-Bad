
import { useState } from 'react';
import  useAxiosPost  from '../Hooks/useAxiosGet';
import AxiosPost from '../Requests/AxiosPost';


function AddNewTaskForm() {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState([]);

const handleTitleChange = (event) => setTitle(event.target.value);
const handleDescriptionChange = (event) => setDescription(event.target.value);


const addNewTask = async () => {
    setLoading(true);
    setErrors([]);
    let errorsForForm = [];
    if (title === '') {
        errorsForForm.push('Please entera title');
    }

    if (errorsForForm.length > 0) {
        setErrors(errorsForForm);
        setLoading(false);
        return;
    }

    await AxiosPost('tasks', {
        title,
        description
    });
    setLoading(false);
    setTitle('');
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


    return (
    <div>
        {errorsElement}
        <div className="form-group">
            <label htmlFor="new-task-title">Title</label>
            <input value={title} disabled={loading} onChange={handleTitleChange} type="text" className="form-control" id="new-task-title"></input>
        </div>
        <div className="form-group">
            <label htmlFor="new-task-description">Description</label>
            <textarea value={description} disabled={loading} onChange={handleDescriptionChange} className="form-control" id="new-task-description"></textarea>
        </div>
        <div className="form-group">
            <button onClick={addNewTask} disabled={loading} className="btn btn-outline-success btn-inverse">{saveButtonText}</button>

        </div>
    </div>
    
    );
    
    
    }
    
    export default AddNewTaskForm; 