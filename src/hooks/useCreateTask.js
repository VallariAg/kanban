import { PRIORITY } from "../constants" 



export default function useCreateTask(title, description, priority, image) {

    const newTask = {
      title: "",
      description: "",
      priority: priority || PRIORITY.MEDIUM,
      image: "" 
    }
    return newTask
  }
