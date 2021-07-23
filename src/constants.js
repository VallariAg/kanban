import { PRIORITY } from "./UserContext/UserContext";

export const taskPriorityClass = (priority) => (
    priority === PRIORITY.MEDIUM ? "bg-yellow-100 text-yellow-800": 
    (priority === PRIORITY.HIGH) ? "bg-red-100 text-red-800": "bg-blue-100 text-gray-800"
);

export const buttonStyle = {
    primary: "hover:text-gray-800 hover:bg-gray-300 bg-gray-600 text-white shadow-sm",
    secondary: "text-gray-800 bg-white hover:bg-gray-300 hover:text-white border-2 border-gray-200 ",
}

export const colors = {
    dark: "#15314b",
    dark2: "#001528",
    dark3: "#001528",
    light: "white",
}
