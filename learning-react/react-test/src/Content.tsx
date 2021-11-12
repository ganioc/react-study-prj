import React from "react";
import Sidebar from './Sidebar'
import RightArticle from './RightArticle'

const Content: React.FC = ()=>{
    return(
        <section>
            <Sidebar />
            <RightArticle />
        </section>
    )
}
export default Content;
