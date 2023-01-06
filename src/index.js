import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider} from "./contexts/BudgetsContext";
import {UserProvider} from './contexts/UserContext';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import LogUser from './components/LogUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
      <UserProvider>
      <BudgetsProvider>
          <Routes>
              <Route path="/budgets" element={<App />} />
              <Route path="/"  element={<LogUser/>}/>
              </Routes>
      </BudgetsProvider>
      </UserProvider>
        </Router>
  </React.StrictMode>
);


