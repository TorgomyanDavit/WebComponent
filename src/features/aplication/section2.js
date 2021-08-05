import { useState } from "react"



function Section2() {
    const [count,setCount] = useState(0)
    return (
        <section className="section2">
            <div className="twoSlider">
                    <div className="twoSliderChild">
                        <h2><span id="spanh2">Заполните заявку и</span> <br/>продайте золото дорого</h2>
                        <p id="p1">
                            <span>Prix</span>
                            <span>45 €</span>
                        </p>
                        <form action="" name="Range2" className="form">
                                <input type="range" 
                                    className="range" 
                                    value={count} 
                                    min="0" 
                                    max="100" 
                                    onChange={(e) => {setCount(e.target.value)}} 
                                    style={{background:"linear-gradient(to right, #BF071A " + count + "%, #F2F9FF 0%)"}}
                                />
                        </form>
                        <p className="p2">
                            <span>1 gr</span>
                            <span>5000 gr.</span>
                        </p>
                        <p className="buttonp"><input type="button" value="Estimez votre d’Or" className="button"/></p>                   
                        <p id="p3">
                            *Нажимая на кнопку, вы даете согласие 
                            на обработку персональных данных и 
                            соглашаетесь с политикой конфиденциальности.
                        </p>
                    </div>
                </div>

            <div className="chequeDiv">
                <p><img src="/images/cheque2.png" className="imgpassport" alt="alt"/><span>La présence de votre carted identité est obliagatoire</span></p>
                <p><img src="/images/cheque1.png" className="imgpassport" alt="alt"/><span>Par chèque ou par virement</span></p>
            </div>
 
            <div className="goldDiv">
                <img src="/images/golden.png" alt="alt" id="golden"/>
            </div>
        </section>
    )
}

export default Section2