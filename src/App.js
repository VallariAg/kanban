import Main from "./pages/Main";
import UserContextApp from "./UserContext/UserContext";
import Header from "./components/Header";

export default function App() {
    
    return (
      <UserContextApp>
        <div>
          <Header />
          <Main />
        </div>
      </UserContextApp>
  );
}

