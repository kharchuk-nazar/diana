import React from "react";

const Aside = ({title, content}) => {
    return (
        <aside>
            <h2>
                {title}
            </h2>
            <div className="aside_content">
                {content}
            </div>
        </aside>
    );
}

export default Aside