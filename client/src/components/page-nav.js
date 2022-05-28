import React from "react";

import "./index.css";

const PageNav = ({children, idName}) => {
    const links = children.map((el, idx) => {
        return(
            <li key={`${el}-${idx}`} className="collection-item"><a href={`#${idName[idx]}`}>{el}</a></li>
        )
    })

    return (
        <div className="my_page_nav">
            <ul className="collection">
                {links}
            </ul>
        </div>
    )
}

export default PageNav