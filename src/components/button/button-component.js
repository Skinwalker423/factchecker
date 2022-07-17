

const FormButton = ({theme, title, onGoogleClick}) => {
    return(
        <button onClick={onGoogleClick} type="submit" className={`w-100 mt-3 btn btn-${theme || 'primary'}`}>{title}</button>
    )
}

export default FormButton;