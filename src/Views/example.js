import { useState } from 'react';

function AddNewTaskForm() {
    // internal state
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const [messages, setMessages] = useState([]);


    // internal events
    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handleMessagenChange = (event) => setMessage(event.target.value);

    const addNewMessage = () => {
        const newMessage = {
            username: username,
            message: message,
            createdAt: new Date(),
        };

        
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setMessage('');
    };

    const messgesEleemtns = messages.map((message) => {
        return (
            <li>
                <strong>{message.username}, {username.createdAt}</strong>
                <br />
                <p>{message.message}</p>
            </li>
        );
    })

    return (
        <div>
            <ul>
                {messgesEleemtns}
            </ul>
            <div className="form-group">
                <label htmlFor="new-task-title">Username</label>
                <input value={title} onChange={handleUsernameChange}  type="text" className="form-control" id="new-task-title"></input>
            </div>
            <div className="form-group">
                <label htmlFor="new-task-description">Message</label>
                <textarea value={description} onChange={handleMessagenChange}  id="new-task-description" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <button onClick={addNewMessage}  className="btn btn-outline-success btn-inverse">Send</button>
            </div>
        </div>
    );
}

export default AddNewTaskForm;