export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'
  return (
    <div className="section-head" style={{ textAlign: align }}>
      {eyebrow && (
        <span className="eyebrow" style={centered ? { justifyContent: 'center' } : undefined}>
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p
          className="section-description"
          style={centered ? { marginInline: 'auto' } : undefined}
        >
          {description}
        </p>
      )}
    </div>
  )
}
