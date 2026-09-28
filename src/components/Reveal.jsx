import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' reveal-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
