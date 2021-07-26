import React, { createContext, useContext } from "react";
import { reducers } from './reducers';
import { createStore } from 'redux';

export default createStore(reducers);