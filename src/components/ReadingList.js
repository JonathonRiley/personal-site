import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// import books from './reading_list.json';
import '../styles/ReadingList.css'


 function Book({details}) {
     return <li className="book" key={details.title} >
                <Link className="book-title" to={details.url} target="_blank">{details.title}</Link>
                <p className="authors publicated">{details.author}</p>
            </li>
 }


function ReadingList() {

    const [items, setItems] = useState([]);

    useEffect(() => {fetch('/reading_list.json')
        .then(response => response.text())
        .then(data => setItems(JSON.parse(data)))
        .catch(error => console.error(error));
    }, []);
    
    if("2024" in items){
        return (<ul className="reading-list">
                    <h3>2024</h3>
                    {items["2024"].map((item) => (
                        <Book details={item}/>
                    ))}
                    <h3 style={{marginTop:"30px"}}>2023</h3>
                    {items["2023"].map((item) => (
                        <Book details={item}/>
                    ))}
                </ul>
            
        )
    }
    else {
        return (<p></p>)
    }
  };


export default ReadingList;

