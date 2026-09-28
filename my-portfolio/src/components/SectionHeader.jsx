import './SectionHeader.css';

export default function SectionHeader({ eyebrow, title, className = '' }) {
  return (
    <header className={`section-header ${className}`.trim()}>
      <p className="section-header__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </header>
  );
}
