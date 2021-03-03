import React from 'react'
import { MuiThemeProvider, createMuiTheme,CssBaseline  } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Forgot from './components/Forgot';
import Test from './pages/Test';
import Customer from './pages/Customer/Index';
import Products from './pages/Catalog/Products/Index';
import Settings from './pages/Settings';
import CustomerAdd from './pages/Customer/CustomerAdd';
const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
   "fontSize": 15,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});
const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
       <CssBaseline />
    <Router>
      <Switch>
      {/*<Route exact path="/" component={Dashboard} />*/}
      <Route exact path="/" component={Test} />
      <Route exact path="/customer" component={Customer} />
      <Route exact path="/customer/add" component={CustomerAdd} />
      <Route exact path="/catalog" component={Products} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgot-password" component={Forgot} />
      </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
