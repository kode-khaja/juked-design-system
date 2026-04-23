interface AvatarProps{
    initials?: string,
    size?: 'sm' | 'md' | 'lg'
}

export default function Avatar({initials, size = 'sm'}: AvatarProps) {
    return (
        <div className={`avatar avatar--${size}`}>
            { initials }
        </div>
    )
}