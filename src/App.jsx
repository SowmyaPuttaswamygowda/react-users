import Header from './components/Header';
import Users from './components/Users';

import './App.css';

import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
    return (
        <div>
            <Header title="Users" />
            <Users />
        </div>
    );
};

export default App;
