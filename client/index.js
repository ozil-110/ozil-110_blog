import React from 'react'
import {render} from 'react-dom'
import {Router,match,hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import routes from './js/containers/Root'
import configureStore from './js/store/configureStore'

const store = configureStore(window.REDUX_STATE)

match({history:hashHistory, routes}, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps}/>
        </Provider>,
        document.getElementById('root')
    )   
})
