import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const MainLayout = ({ children, sectionRefs }) => {
    return (
        <>
            <Header sectionRefs={sectionRefs} />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout