import logo from "../assets/Logo.svg";

export function Header() {
    return (
        <div style={{ width: "100%", background: "#0D0D0D", height: 12.5 + "rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={logo} style={{ width: 7.875 + "rem", height: 3 + "rem" }} />
        </div>
    )
}