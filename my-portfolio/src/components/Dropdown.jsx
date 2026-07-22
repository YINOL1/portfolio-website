import { Link } from 'react-router-dom';

export default function Dropdown({ items }) {
  return (
    <div className="dropdown-menu"> 
      <ul className="list-items">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}