import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// import data from './publications.json';
import '../styles/Publications.css'

 function PublicationItem({details}) {
     return <li className="publication" key={details.title} >
                <Link className="publication-title" to={details.url} target="_blank">{details.title}</Link>
                <p className="authors publicated">{details.authors} ({details.when})</p>
            </li>
 }

const PublicationsList = () => {
    const [items, setItems] = useState([]);

    
    useEffect(() => {fetch('/publications.json')
        .then(response => response.text())
        .then(data => setItems(JSON.parse(data)))
        .catch(error => console.error(error));
    }, []);
    return (<ul className="publications">
                {items.map((item) => (
                    <PublicationItem details={item}/>
                ))}
            </ul>
        
    )
  };


export default PublicationsList;

