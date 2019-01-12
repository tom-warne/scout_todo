/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

/* React */
import React                            from 'react'
import { render }                       from 'react-dom'

/* Redux */
import { createStore, applyMiddleware } from 'redux'
import { Provider }                     from 'react-redux'
import logger                           from 'redux-logger'
import createSagaMiddleware             from 'redux-saga'

/* Application */
import App      from 'app'
import reducers from 'reducers'
import sagas    from 'sagas'

/* Setup Constants */
const sagaMiddleware = createSagaMiddleware()

/* Execution Constants */
const middleware = [sagaMiddleware, logger]
const store      = createStore(reducers, applyMiddleware(...middleware))

sagaMiddleware.run(sagas)

/* Application Attachment */
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('Root')
  )
})

/* Validations */
console.log('Hello World from Webpacker')
