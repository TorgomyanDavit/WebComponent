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
                {state.mainSec1.map((val) => {
                    return (
                    <p key={val.id} className="childParagraf">
                        <img src={val.img}/>
                        <span>{val.text1}</span>
                        <span>{val.text2}</span>
                    </p>
                    )
                })}
            </div>
        </section>
    )
}
export default Section1