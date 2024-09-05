import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// import jobs from '/jobs.json';
import '../styles/Work.css'


function Technology({name}){
    return <div className="technology">{name}</div>
}


 function Job({details}) {
     return <li className="job" key={details.key} >
                <Link className="company" to={details.url} target="_blank">{details.company}</Link>
                <p className="job-title">{details.title}</p>
                <p className="job-duration">{details.when}</p>
                <p className="job-description">{details.description}</p>
                <div className="technologies">
                    {details['technologies'].map((tech) => (
                        <Technology name={tech}/>
                    ))}
                </div>
            </li>
 }


const WorkList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {fetch('/jobs.json')
        .then(response => response.text())
        .then(data => setItems(JSON.parse(data)))
        .catch(error => console.error(error));
    }, []);
    return (<ul className="work-list">
                {items.map((item) => (
                    <Job details={item}/>
                ))}
            </ul>
        
    )
  };


export default WorkList;

