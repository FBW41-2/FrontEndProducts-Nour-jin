import React from 'react';

function Page(props){
    return(
        <li className="list-group-item">
           <a href={props.pageLink} target='_blank' rel="noopener noreferrer">
                <div>{props.pageTitle}</div>
            </a>
            <div>{props.pageExcerpt}</div>
           </li> 
       
    )
}

export default Page