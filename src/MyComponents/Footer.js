import React from 'react'

export const Footer = () => {
    let footerStyle={
        position:"relative",
        width:"100%",
        top:"60vh"
    }
    return (
        <footer style={footerStyle}>
            <p className="bg-dark text-white pt-2 pb-3 mt-3 text-center">Copyright @ 2021 - Ritesh Dewoolkar</p>
        </footer>
    )
}

