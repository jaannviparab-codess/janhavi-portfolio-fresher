// Minimal hand-rolled icon set (stroke-based, 24x24) so the project has
// zero icon-library dependency. Every icon accepts standard SVG props.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function GitHubIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

export function ExternalLinkIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 3.5h2.7l1.4 4.2-2 1.6a11.4 11.4 0 0 0 6 6l1.6-2 4.2 1.4v2.7c0 1.1-.9 1.9-2 1.8-4.5-.3-8.8-2.3-12-5.4a17.6 17.6 0 0 1-5.4-12c-.1-1.1.7-2 1.8-2.3Z" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.3 7-11.5a7 7 0 1 0-14 0C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  )
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12m0 0-4-4m4 4 4-4M5 19.5h14" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  )
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function CodeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  )
}

export function ServerIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4" width="17" height="6" rx="1.6" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.6" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  )
}

export function DatabaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
      <path d="M4.5 5.5V18c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V5.5" />
      <path d="M4.5 11.8c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
    </svg>
  )
}

export function SparklesIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 13.6 8l4.4 1.6-4.4 1.6L12 15.7l-1.6-4.5L6 9.6 10.4 8Z" />
      <path d="M19 15.5 19.8 18l2.2.8-2.2.8-.8 2.4-.8-2.4-2.2-.8 2.2-.8Z" />
    </svg>
  )
}

export function WrenchIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.7L4 16.3V20h3.7l5.3-5.3a4 4 0 0 0 4.7-5.4l-2.9 2.9-2-2Z" />
    </svg>
  )
}

export function FlaskIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 3h5M10 3v6.2L5.8 17a2.2 2.2 0 0 0 1.9 3.3h8.6a2.2 2.2 0 0 0 1.9-3.3L14 9.2V3" />
      <path d="M8 15h8" />
    </svg>
  )
}

export function GraduationCapIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m2 9 10-4.5L22 9l-10 4.5L2 9Z" />
      <path d="M6 11.3V16c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4.7M22 9v6" />
    </svg>
  )
}

export function AwardIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.3 13.7-1.4 6.8 5.1-2.6 5.1 2.6-1.4-6.8" />
    </svg>
  )
}

export function BookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4.8A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21Z" />
      <path d="M4 4.8v16.2M20 18.5H6.5A2.5 2.5 0 0 0 4 21" />
    </svg>
  )
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  )
}

export function LayersIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </svg>
  )
}
