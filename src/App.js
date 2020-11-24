import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from "./components/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useStateValue } from "./components/StateProvider"


function App() {

  // const [user,setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {(!user) ? (
          <Login />
        ) : (
            <>
              <div className="ui celled grid">
                  <div className="row">
                    <div className="three wide column app__sideBar">
                      <Sidebar />
                    </div>
                    <div className="thirteen wide column app__chatBar">
                      <Switch>
                        <Route path="/room/:roomId">
                          <Chat />
                        </Route>
                        <Route path="/">
                          <h1>Welcome</h1>
                        </Route>
                      </Switch>
                    </div>
                  </div>
                </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
