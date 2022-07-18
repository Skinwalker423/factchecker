

const FormButton = ({theme, title, disabled }) => {
    return(
        <button disabled={disabled} type="submit" className={`w-100 mt-3 btn btn-${theme || 'primary'}`}>{title}</button>
    )
}

export default FormButton;