import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import routes from './route'
import store from './store/index'

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Header />
                {renderRoutes(routes)}
                <Footer />
            </HashRouter>
        </Provider>
    )
})
