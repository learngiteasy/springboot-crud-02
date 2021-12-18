import React from 'react'
import HomeComponent from './components/HomeComponent'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import AddEmployee from './components/AddEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import CreateEmployee from './components/CreateEmployee'
import DeleteEmployee from './components/DeleteEmployee'
function App() {
    return (
        <div>
          <Router>
              <Switch>
                 <Route path="/employees" component={HomeComponent}></Route>
                 <Route path="/addemployee" component={CreateEmployee}></Route>
                 <Route path="/updateemployee/:id" component={UpdateEmployee}></Route>
                 <Route path="/deleteemployee/:id" component={DeleteEmployee}></Route>
          
                          </Switch>
          </Router>
        </div>
    )
}

export default App
