import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import routes from './route'

export default memo(function App() {
    return (
        <HashRouter>
            <Header />
            {renderRoutes(routes)}
            <Footer />
        </HashRouter>
    )
})
