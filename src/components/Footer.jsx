import Image from "next/image";
import github_icon from "@logos/logo-github.svg";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="title">
                <h2>DK-GIF Search Engine</h2>
                
            </div>
            <div className="content-footer">
                <div className="grid-left">
                    <p>Introducing my GIF search engine, 
                        a dynamic web application designed 
                        to provide users with a seamless and 
                        engaging way to discover and 
                        share their favorite animated images.</p>
                </div>
                <div className="grid-right">
                    <ul>
                        <li><Image src={github_icon}  width={20} height={20} className=""/> <a href="https://github.com/Dakrfox" target="_blank">Dakrfox</a> </li>
                        <li><Image src={github_icon} width={20} height={20} className=""/> <a href="https://github.com/Dakrfox" target="_blank">Dakrfox</a> </li>
                        <li><Image src={github_icon} width={20} height={20} className=""/> <a href="https://github.com/Dakrfox" target="_blank">Dakrfox</a> </li>
                    </ul>
                </div>
            </div>
        </div>

    );

}
