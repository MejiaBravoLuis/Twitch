import logo from '../assets/img/EscudoPeque.svg'

export const Logo = ({ text }) => {
    return (
        <div className="auth-form-logo-container">
            <img src={logo} alt="Logo" />
            <span>{text}</span>
        </div>
    )
}