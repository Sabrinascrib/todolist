window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const listEl = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;

    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");

    taskEl.appendChild(taskContentEl);

    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.type = "text";
    taskInputEl.value = task;
    taskInputEl.setAttribute("readonly", "readonly");

    taskContentEl.appendChild(taskInputEl);

    const taskActionEl = document.createElement("div");
    taskActionEl.classList.add("actions");

    const taskEditEl = document.createElement("button");
    taskEditEl.classList.add("edit");
    taskEditEl.innerText = "Edit";

    const taskDeleteEl = document.createElement("button");
    taskDeleteEl.classList.add("delete");
    taskDeleteEl.innerText = "Delete";

    taskActionEl.appendChild(taskEditEl);
    taskActionEl.appendChild(taskDeleteEl);

    taskEl.appendChild(taskActionEl);

    listEl.appendChild(taskEl);

    input.value = "";

    taskEditEl.addEventListener("click", (e) => {
      if (taskEditEl.innerText.toLowerCase() == "edit") {
        taskEditEl.innerText = "Save";
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
      } else {
        taskEditEl.innerText = "Edit";
        taskInputEl.setAttribute("readonly", "readonly");
      }
    });
  });
});
