import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// import data from './schools.json';
import '../styles/Education.css'


function Award({name}){
    return <div className="award">{name}</div>
}


 function SchoolItem({details}) {
     return <li className="school" key={details.key} >
                <Link className="degree-title" to={details.url} target="_blank">{details.degree}</Link>
                <p className="school-name">{details.school}</p>
                <p className="school-when">{details.when}</p>
                <div className="awards-list">
                    {details['awards'].map((award) => (
                        <Award name={award}/>
                    ))}
                </div>
            </li>
 }


const SchoolList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {fetch('/schools.json')
        .then(response => response.text())
        .then(data => setItems(JSON.parse(data)))
        .catch(error => console.error(error));
    }, []);
    return (<ul className="school-list">
                {items.map((item) => (
                    <SchoolItem details={item}/>
                ))}
            </ul>
        
    )
  };


export default SchoolList;

