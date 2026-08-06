import './Dropdown.css';

export default function Dropdown({ items, onMouseEnter, onMouseLeave }) {
  return (
    <div className="dropdown-menu" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ul className="list-items">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="dropdown-link">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}