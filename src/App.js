import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {
  useEffect(() => {
    //Init materialize js
    M.AutoInit();
  });
  return (
    <Fragment>
  <SearchBar />
  <div className="container">
    <AddBtn/>
    <AddLogModal/>
    <Logs />
  </div>
    </Fragment>
  );
}

export default App;
