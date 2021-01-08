import React from 'react'

   function Rainbow  (Wrappedcomponent){

    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * 6)];
    const className = randomColor + "-text"
    return (props) =>{
        return (
            <div className={className}>
                <Wrappedcomponent {...props}/>
            </div>
        )
    }
}
export default Rainbow 
