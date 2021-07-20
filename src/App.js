import Main from "./pages/Main";
import UserContextApp from "./UserContext/UserContext";


export default function App() {
    
    return (
      <UserContextApp>
        <header>App header</header>
        <Main />
      </UserContextApp>
  );
}

