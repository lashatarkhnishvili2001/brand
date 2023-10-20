
const AuthInput = ({id, type, ref, autoComplete, placeholder, value, onChange, ariaInvalid, ariaDescribedby,onFocus,onBlur}) => {
    return (
            <input id={id} 
                type={type} 
                ref={ref} 
                autoComplete={autoComplete} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
                aria-invalid={ariaInvalid}
                aria-describedby={ariaDescribedby}
                onFocus={onFocus}
                onBlur={onBlur}
                required
            />
    )
}

export default AuthInput