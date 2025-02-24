import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
    },
    header: {
      fontSize: '32px',
      color: '#2c3e50',
      textAlign: 'center',
      marginBottom: '30px',
    },
    inputContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '30px',
    },
    input: {
      flex: '1',
      padding: '12px 15px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      outline: 'none',
    },
    addButton: {
      padding: '12px 25px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
    },
    taskItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '5px',
      marginBottom: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    taskText: {
      fontSize: '16px',
      color: '#2c3e50',
    },
    buttonContainer: {
      display: 'flex',
      gap: '10px',
    },
    completeButton: {
      padding: '8px 15px',
      backgroundColor: '#2ecc71',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    deleteButton: {
      padding: '8px 15px',
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    footer: {
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px',
      borderTop: '1px solid #eee',
    },
    footerText: {
      color: '#666',
      fontSize: '14px',
      marginBottom: '15px',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    link: {
      color: '#666',
      textDecoration: 'none',
    },
    contactButton: {
      padding: '8px 15px',
      backgroundColor: '#2ecc71',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none',
    },
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Todo List</h1>
      
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>
          Add Task
        </button>
      </div>

      <div>
        {tasks.map(task => (
          <div key={task.id} style={styles.taskItem}>
            <span style={{
              ...styles.taskText,
              textDecoration: task.completed ? 'line-through' : 'none',
            }}>
              {task.text}
            </span>
            <div style={styles.buttonContainer}>
              <button
                onClick={() => handleToggleComplete(task.id)}
                style={styles.completeButton}
              >
                Complete
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ToDoList;