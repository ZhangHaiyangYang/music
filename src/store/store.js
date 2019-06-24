import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {redus} from '../reducers/newdata'
export  const store=createStore(
    redus,
    compose( applyMiddleware(...[thunk]),
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
   )