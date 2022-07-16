

const FormButton = ({theme, title, onClick}) => {
    return(
        <button onClick={onClick} type="submit" className={`btn btn-${theme || 'primary'}`}>{title}</button>
    )
}

export default FormButton;