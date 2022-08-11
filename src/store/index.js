import { applyMiddleware,  createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import loggerMiddleware from '../logger'
import appReducers from '../reducers'



export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(enhancers)

  const store = createStore(appReducers, preloadedState, composedEnhancers)

  return store
}