export default function Badge({ children, accent = false }) {
  return <span className={`chip${accent ? ' chip-accent' : ''}`}>{children}</span>
}
