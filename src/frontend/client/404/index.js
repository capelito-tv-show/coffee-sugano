import React from 'react';

export function noMatch({ location }) {
    return(
        <div style={{
            position: "absolute",
            top: "calc(50% - 50px)",
            left: "calc(50% - 50px)"
        }}>
            <h3>
                お探しのページはございません。<br />
                <code>{location.pathname}</code>
            </h3>
        </div>
    )
}
