interface ButtonProps {
    label: string,
    variant?: 'primary' | 'hover' | 'disabled',
    onClick?: () => void
}

export default function Button( { label, variant = 'primary', onClick } : ButtonProps ) {
       return (
        <>
        <button className={`btn btn--${variant}`} 
        onClick={onClick} 
        disabled={variant === 'disabled'}>
            {label}
            </button>
        </>
       )
}