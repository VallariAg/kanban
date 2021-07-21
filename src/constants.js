import { PRIORITY } from "./UserContext/UserContext";

export const taskPriorityClass = (priority) => (
    priority === PRIORITY.MEDIUM ? "bg-yellow-100": 
    (priority === PRIORITY.HIGH) ? "bg-red-100": "bg-gray-100");
