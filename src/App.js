import Main from "./pages/Main";
import UserContextApp from "./UserContext/UserContext";


export default function App() {
    
    return (
      <UserContextApp>
        <div>
            <header className="bg-gray-800 py-3 text-white px-5 text-xl font-bold">
              Kanban Board
            </header>
            <Main />
        </div>
      </UserContextApp>
  );
}

