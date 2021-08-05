import { useSelector } from "react-redux"



function Section1() {
    const state = useSelector((state) => state.aplication)
    return (
        <section className="mainSection1">
            <p className="Sec1-h2">
                <span>Vendez votre or en </span>
                <span>3 étapes simples</span>
            </p>

            <div className="Section1child1">
                {state.mainSec1.map((val,i) => {
                    return (
                    <div key={val.id} className="childParagraf">
                        <img src={val.img} id="images" alt="alt"/>
                        <p id="paragraff">
                            <span id="id1">{val.text1}</span>
                            <span id={"id2" + i} >{val.text2}</span>
                        </p>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Section1