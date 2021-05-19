import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddLead from './component/addLead';

import {
  Switch,
  Route,
} from "react-router-dom";
import VendorRegistration from './component/venderRegistration';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/v1/vendor-registration/:id">
            <VendorRegistration/>
          </Route>
          <Route exact path="/">
            <AddLead/>
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
