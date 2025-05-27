document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');

  function createTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      createTask(taskText);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });
});
