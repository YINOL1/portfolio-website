import './ProjectCard.css';

export default function ProjectCard({
  name,
  summary,
  stack,
  variant = 'default',
  href,
  ctaLabel,
  imageLabel,
  accent = false,
  isLink = false,
  children
}) {
  const cardClassName = [
    'project-card',
    variant === 'cta' ? 'project-cta-card' : '',
    accent ? 'project-card-accent' : ''
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <div
        className={['project-image-slot', variant === 'cta' ? 'project-cta-slot' : ''].filter(Boolean).join(' ')}
        aria-label={imageLabel}
      />
      <p className="project-name">{name}</p>
      {children ? children : <p>{summary}</p>}
      <span>{stack}</span>
    </>
  );

  if (isLink) {
    return (
      <a className={cardClassName} href={href}>
        {content}
      </a>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}
