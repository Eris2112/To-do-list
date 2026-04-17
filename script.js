document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Fshi";
      removeBtn.classList.add("remove-btn");

      removeBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
