import React, { useState } from 'react';
import '../Css/Brand.css';
import '../Css/ResisBrand5.css';

const FvBrand = () => {
    const [selecB1, setSelecB1] = useState('0');
    const [selecB2, setSelecB2] = useState('0');
    const [selecB3, setSelecB3] = useState('0');
    const [selecB4, setSelecB4] = useState('0');
    const [selecB5, setSelecB5] = useState('');

    const Result = (props) => {

        const mutip = ['0', '1', '2', '3', '4', '5', '6', '-1', '-2']
        const tolerance = ['± 1%', '± 2%', '± 0.5%', '± 0.25%', '± 0.1%', '± 0.05%', '± 5%', '± 10%']
        const A = (props.B1 + props.B2 + props.B3) * (10 ** mutip[props.B4]);
        const B = tolerance[props.B5];
        return (
            <h1>{A}&nbsp;Ω&nbsp;{B}</h1>
        );
    }

    const ResistorPic = (props) => {
        const BColors = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Grey', 'White']
        const MColors = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'DarkGoldenrod', 'Silver']
        const TColors = ["Brown", 'Red', 'Green', 'Blue', 'Violet', 'Grey', 'DarkGoldenrod', 'Silver']
        return (
            <div className='resistorBrand2'>
                <div className='Resisbrand-2'></div>
                <div id='rerow'>
                    <div id='brand-5-1'></div>
                    <div style={{ backgroundColor: BColors[props.B1] }} id='brand-5-2'></div>
                    <div id='brand-5-3'></div>
                    <div style={{ backgroundColor: BColors[props.B2] }} id='brand-5-2'></div>
                    <div id='brand-5-4'></div>
                    <div style={{ backgroundColor: BColors[props.B3] }} id='brand-5-2'></div>
                    <div id='brand-5-5'></div>
                    <div style={{ backgroundColor: MColors[props.B4] }} id='brand-5-2'></div>
                    <div id='brand-5-6'></div>
                    <div style={{ backgroundColor: TColors[props.B5] }} id='brand-5-2'></div>
                    <div id='brand-5-7'></div>
                </div>
                <div className='Resisbrand-3'></div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className='input-va'>
                5 Brand
                <ResistorPic B1={selecB1} B2={selecB2} B3={selecB3} B4={selecB4} B5={selecB5} />
                <Result B1={selecB1} B2={selecB2} B3={selecB3} B4={selecB4} B5={selecB5} />
                <div class="row">
                    <div class="column"><span>Brand 1</span></div>
                    <div class="column">
                        Colors&nbsp;&nbsp;&nbsp;
                        <select value={selecB1} onChange={e => setSelecB1(e.target.value)}>
                            <option value={null}>select color</option>
                            <option value={0}>Black  </option>
                            <option value={1}>Brown  </option>
                            <option value={2}>Red    </option>
                            <option value={3}>Orange </option>
                            <option value={4}>Yellow </option>
                            <option value={5}>Green  </option>
                            <option value={6}>Blue   </option>
                            <option value={7}>Purple </option>
                            <option value={8}>Grey   </option>
                            <option value={9}>White  </option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="column">Brand 2</div>
                    <div class="column">
                        Colors&nbsp;&nbsp;&nbsp;
                        <select value={selecB2} onChange={e => setSelecB2(e.target.value)}>
                            <option value={null}>select color</option>
                            <option value={0}>Black  </option>
                            <option value={1}>Brown  </option>
                            <option value={2}>Red    </option>
                            <option value={3}>Orange </option>
                            <option value={4}>Yellow </option>
                            <option value={5}>Green  </option>
                            <option value={6}>Blue   </option>
                            <option value={7}>Purple </option>
                            <option value={8}>Grey   </option>
                            <option value={9}>White  </option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="column">Brand 3</div>
                    <div class="column">
                        Colors&nbsp;&nbsp;&nbsp;
                        <select value={selecB3} onChange={e => setSelecB3(e.target.value)}>
                            <option value={null}>select color</option>
                            <option value={0}>Black  </option>
                            <option value={1}>Brown  </option>
                            <option value={2}>Red    </option>
                            <option value={3}>Orange </option>
                            <option value={4}>Yellow </option>
                            <option value={5}>Green  </option>
                            <option value={6}>Blue   </option>
                            <option value={7}>Purple </option>
                            <option value={8}>Grey   </option>
                            <option value={9}>White  </option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="column">Multiplier</div>
                    <div class="column">
                        Colors&nbsp;&nbsp;&nbsp;
                        <select value={selecB4} onChange={e => setSelecB4(e.target.value)}>
                            <option value={null}>select color</option>
                            <option value={0}>Black </option>
                            <option value={1}>Brown </option>
                            <option value={2}>Red   </option>
                            <option value={3}>Orange</option>
                            <option value={4}>Yellow</option>
                            <option value={5}>Green </option>
                            <option value={6}>Blue  </option>
                            <option value={7}>Gold  </option>
                            <option value={8}>silver</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="column">Tolerance</div>
                    <div class="column">
                        Colors&nbsp;&nbsp;&nbsp;
                        <select value={selecB5} onChange={e => setSelecB5(e.target.value)}>
                            <option value={null}>select color</option>
                            <option value={0}>Brown  </option>
                            <option value={1}>Red </option>
                            <option value={2}>Green   </option>
                            <option value={3}>Blue  </option>
                            <option value={4}>Violet    </option>
                            <option value={5}>Grey  </option>
                            <option value={6}>Gold   </option>
                            <option value={7}>Silver </option>
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FvBrand