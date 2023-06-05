import React from "react";
import Card from './Cards';
import "./index.css";
import Data from './Data';

function App (){
    return (
        <>
        <h1 className="heading_style">List of my favourite Series:</h1>
        {Data.map((val) =>{
        return(
        <Card
         key={val.id}
         imgsrc={val.imgsrc}
         title={val.title}
         sname={val.sname}
         link={val.links}
        />  
      );
    })}
  </>
    );
}
export default App;