import { useState } from "react"
import logo from "./images/logo.svg"
function Header() {
    const [value,setValue] = useState(0)
    return (
        <header className="header">
            <div className="Div1">
                <a href="www"><img src={logo} id="Link" alt="alt"/></a>
                <h1>Rachat {"&"} Vente Or <br/>à Cagnes-sur-Mer</h1>
                <p>Bijoux, lingots, pièces <br/>et tout objet en or</p>
            </div>

            <div className="Div2childDiv1">
                <a href="tel:04 65 84 07 08" className="Link2"><img src="/images/call.png" alt="alt"/></a>
                <p><a href="tel:04 65 84 07 08" className="Link3">04 65 84 07 08</a><br/>Appel non surtaxé</p>
            </div>

            <div className="Div2">
                <div className="Div2childDiv2">
                    <div className="Div2childDiv2Child">
                        <h2><span id="spanh2">Заполните заявку и</span> <br/>продайте золото дорого</h2>
                        <p className="p1">
                            <span>Prix</span>
                            <span>45 €</span>
                        </p>
                        <form action="" name="Range" className="form">
                                <input type="range" 
                                    className="range" 
                                    value={value} 
                                    min="0" 
                                    max="100" 
                                    onChange={(e) => {setValue(e.target.value)}} 
                                    style={{background:"linear-gradient(to right, #BF071A " + value + "%, #F2F9FF 0%)"}}
                                />
                        </form>
                        <p className="p2">
                            <span>1 gr</span>
                            <span>5000 gr.</span>
                        </p>
                        <input type="button" value="Estimez votre d’Or" className="button"/>

                        <p id="p3">
                            *Нажимая на кнопку, вы даете согласие 
                            на обработку персональных данных и 
                            соглашаетесь с политикой конфиденциальности.
                        </p>
                    </div>
                </div>
            </div>

            <div className="imgdiv3">
                <img src="/images/goldHand.png"alt="alt"/>
            </div>
        </header>
    )
}
export default Header