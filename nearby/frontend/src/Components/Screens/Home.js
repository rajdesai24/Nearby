import React from 'react';
import Sidebar from "../Parts/Sidebar";
import "../Parts/Home.css";

const Home = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return(
        <>
        <body>
            <Sidebar/>
        </body>
        </>
    );
};
export default Home;
