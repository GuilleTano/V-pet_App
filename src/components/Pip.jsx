function Pip({ className, active }) {

    return (
        <div
            className={`${className} ${active ? "active" : ""}`}
        />
    );

}

export default Pip