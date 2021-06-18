import image from '../images/img.jpg'
import { Link } from 'react-router-dom';
function Contactdetails(props)
{
    const{name,email}=props.location.state.contact;
    return(
        <div className="main">
            <div className="ui card center">
            <img className="image" src={image} alt="user"/>
            <div className="content">
             <div className="header">{name}</div>
                <div>{email}</div>
                </div>
                </div>
                <Link to="/">
                <button>back to contact</button>
                </Link>
        </div>
    )
}
export default Contactdetails;