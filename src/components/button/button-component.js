

const Button = ({theme, title}) => {
    return(
        <button type="submit" className={`btn btn-${theme || 'primary'}`}>{title}</button>
    )
}

export default Button;