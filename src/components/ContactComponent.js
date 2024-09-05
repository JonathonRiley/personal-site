import {Link} from "react-router-dom";



 function ContactItem({link, name}) {
     return <li key={name} >
                <Link to={link} target="_blank">{name}</Link>
            </li>
 }

const Contacts = () => {
    const items = [
                    ['https://linkedin.com/in/Jonathon-Riley', 'LinkedIn ↗'],
                    ['https://github.com/JonathonRiley', 'Github ↗'],
                    ['mailto:jonathonriley1990@gmail.com', 'Email ↗'],
                ];
    return (<ul className="contacts">
                {items.map((item) => (
                    <ContactItem link={item[0]} name={item[1]}/>
                ))}
            </ul>
        
    )
  };


export default Contacts;

