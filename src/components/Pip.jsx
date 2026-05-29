function Pip({ color, active }) {

    return (
        <div
            className={`pip ${color} ${active ? "active" : ""}`}
        />
    );

}

export default Pip