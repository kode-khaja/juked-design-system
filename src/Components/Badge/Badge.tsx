interface BadgeProps {
  /** The text displayed inside the badge */
  label: string
  /** Controls the visual style of the badge */
  variant?: 'default' | 'outline' | 'muted'
}

export default function Badge({label, variant = 'default'}: BadgeProps) {
    return (
        <span className={`badge badge--${variant}`}>
          { label }
        </span>
    )
}