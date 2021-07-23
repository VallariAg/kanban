import { PRIORITY } from "./UserContext/UserContext";

export const taskPriorityClass = (priority) => (
    priority === PRIORITY.MEDIUM ? "bg-yellow-300": 
    (priority === PRIORITY.HIGH) ? "bg-red-400": "bg-gray-400");

export const colors = {
    dark: "#15314b",
    dark2: "#001528",
    dark3: "#001528",
    light: "white",
}
