import "../Styles/Footer.css"

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <p>
                &copy; <span id="year">{ currentYear }</span> All rights reserved.
            </p>
        </div>
    )
}

export default Footer;