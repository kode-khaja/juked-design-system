interface InputProps {
  /** The label displayed above the input */
  label: string
  /** Controls the visual state of the input */
  state?: 'default' | 'focused' | 'error' | 'disabled'
  /** Placeholder text shown when input is empty */
  placeholder?: string
  /** Error message shown below input when state is error */
  errorMessage?: string
}
export default function Input({ label, placeholder = 'Placeholder Text', 
    state = 'default', errorMessage = 'This field is required'}: InputProps) {
        return (
            <div className="input-wrapper">
                <label className="input-label">{label}</label>
                <input className={`input-field input-field--${state}`} 
                       placeholder={placeholder} 
                       disabled={state === 'disabled'}
                       />
                       {
                        state === 'error' && (
                            <span className="input-error">{errorMessage}</span>
                        )}
            </div>
        )
    }