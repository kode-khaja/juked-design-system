interface InputProps {
    label: string,
    placeholder?: string,
    state: 'default' | 'focused' | 'error' | 'disabled',
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