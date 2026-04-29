interface AvatarProps {
  /** Initials displayed inside the avatar circle */
  initials: string
  /** Controls the size of the avatar */
  size?: 'sm' | 'md' | 'lg'
}

export default function Avatar({initials, size = 'sm'}: AvatarProps) {
    return (
        <div className={`avatar avatar--${size}`}>
            { initials }
        </div>
    )
}