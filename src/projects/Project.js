class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
  getTasks() {
    return this.tasks;
  }
  
}

export default Project;