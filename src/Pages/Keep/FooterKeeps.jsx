import React from 'react';

const FooterKeep = () =>
{
    const Year = new Date().getFullYear();
    return(
        <>
            <footer>
                <h1>Copyright © {Year}</h1>
            </footer>
        </>
    );
}

export default FooterKeep;