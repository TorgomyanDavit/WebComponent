import { createSlice } from "@reduxjs/toolkit";
import Frame1 from "./images/Frame 1.png"
import Frame2 from "./images/Frame 2.png"
import Frame3 from "./images/Frame 3.png"



const initialState = {
    mainSec1:[
        {id:Math.random(),img:Frame1,text1:"Expertise gratuite",text2:"Aucune restriction de poids et de l’état d’or"},
        {id:Math.random(),img:Frame2,text1:"Paiement immédiat",text2:"Le paiement se fait par chèque bancaire ou virement"},
        {id:Math.random(),img:Frame3,text1:"Garantie de confiance",text2:"Le paiement se fait par chèque bancaire ou virement"},
    ]
}

const aplicationSlices = createSlice({
    name:"aplication",
    initialState:initialState,

    reducers:{

    }
})

export default aplicationSlices.reducer