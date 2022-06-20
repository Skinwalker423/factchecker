

const Button = ({theme, title}) => {
    return(
        <button type="button" className={`btn btn-${theme || 'primary'}`}>{title}</button>
    )
}

export default Button;