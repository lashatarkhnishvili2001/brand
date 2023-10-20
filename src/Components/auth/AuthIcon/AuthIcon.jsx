

const AuthIcon = ({onClick,Icon, className }) => {
    return (
        <div className={className} onClick={onClick}>
            {Icon}
        </div>
    )
}

export default AuthIcon