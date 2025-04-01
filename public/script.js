// document.addEventListener('DOMContentLoaded', () => {
//     const taskForm = document.getElementById('task-form');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Load tasks from API
//     async function fetchTasks() {
//         const response = await fetch('/api/tasks');
//         const tasks = await response.json();
//         taskList.innerHTML = '';

//         tasks.forEach(task => {
//             const li = document.createElement('li');
//             li.textContent = task.title;
//             if (task.completed) li.classList.add('completed');

//             // Mark as complete button
//             const completeBtn = document.createElement('button');
//             completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
//             completeBtn.onclick = () => toggleComplete(task._id, !task.completed);

//             // Delete button
//             const deleteBtn = document.createElement('button');
//             deleteBtn.textContent = '❌';
//             deleteBtn.onclick = () => deleteTask(task._id);

//             li.appendChild(completeBtn);
//             li.appendChild(deleteBtn);
//             taskList.appendChild(li);
//         });
//     }

//     // Add task
//     taskForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const title = taskInput.value.trim();
//         if (!title) return;

//         await fetch('/api/tasks', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title })
//         });

//         taskInput.value = '';
//         fetchTasks();
//     });

//     // Toggle task completion
//     async function toggleComplete(id, completed) {
//         await fetch(`/api/tasks/${id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ completed })
//         });
//         fetchTasks();
//     }

//     // Delete task
//     async function deleteTask(id) {
//         await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
//         fetchTasks();
//     }

//     // Load tasks initially
//     fetchTasks();
// });




document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from API
    async function fetchTasks() {
        const response = await fetch('/api/tasks');
        const tasks = await response.json();
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            
            // Create a div for task title to ensure the buttons stay aligned
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-title');
            taskDiv.textContent = task.title;

            if (task.completed) li.classList.add('completed');

            // Mark as complete button
            const completeBtn = document.createElement('button');
            completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
            completeBtn.onclick = () => toggleComplete(task._id, !task.completed);

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.onclick = () => deleteTask(task._id);

            li.appendChild(taskDiv); // Append the task title
            li.appendChild(completeBtn); // Append the complete button
            li.appendChild(deleteBtn); // Append the delete button
            taskList.appendChild(li);
        });
    }

    // Add task
    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = taskInput.value.trim();
        if (!title) return;

        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });

        taskInput.value = '';
        fetchTasks();
    });

    // Toggle task completion
    async function toggleComplete(id, completed) {
        await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed })
        });
        fetchTasks();
    }

    // Delete task
    async function deleteTask(id) {
        await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
        fetchTasks();
    }

    // Load tasks initially
    fetchTasks();
});
