import Main from "./pages/Main";
import UserContextApp from "./UserContext/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
    
    return (
      <UserContextApp>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </UserContextApp>
  );
}

