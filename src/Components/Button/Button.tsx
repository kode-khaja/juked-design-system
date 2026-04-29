interface ButtonProps {
  /** The text displayed inside the button */
  label: string
  /** Controls the visual style of the button */
  variant?: 'primary' | 'hover' | 'disabled'
  /** Callback fired when the button is clicked */
  onClick?: () => void
  /** Makes the button stretch to fill its parent container */
  fullWidth?: boolean
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