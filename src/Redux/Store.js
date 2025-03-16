import { createStore } from 'redux';
import reducerfn from './reducer';

const store= createStore(reducerfn)

export default store;