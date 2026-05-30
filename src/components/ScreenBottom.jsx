function ScreenBottom({ icon, text }) {

    return (
        <div className="screen-bottom">
            {icon && (<img src={icon} className="screen-icon"/>)}
            <span className="screen-text">{text}</span>
        </div>
    );// Si icon tiene contenido, renderiza el img
}

export default ScreenBottom