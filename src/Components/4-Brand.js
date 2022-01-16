import React, { useState } from 'react';
import '../Css/Brand.css';
import '../Css/Option.css'

const FoBrand = () => {

    const [selecB1, setSelecB1] = useState('');
    const [selecB2, setSelecB2] = useState('');
    const [selecB3, setSelecB3] = useState('');
    const [selecB4, setSelecB4] = useState('');

    const Result = (props) => {
        
        const tolerance = ['', '±20%', '±10%', '±5%', '±1%', '±2%', '±0.5%', '±0.25%', '±0.1%', '±0.05%']
        const A = (props.B1 + props.B2) * (10 ** props.B3);
        const B = tolerance[props.B4];
        return (
            <h1>{A}&nbsp;Ω&nbsp;{B}</h1>
        );
    }

    return (
        <React.Fragment>
            <div className='input-va'>
                4 Brand
                <div></div>
                <Result B1={selecB1} B2={selecB2} B3={selecB3} B4={selecB4} />
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
                    <div class="column">Multiplier</div>
                    <div class="column">
                        Colors&nbsp;&nbsp;&nbsp;
                        <select value={selecB3} onChange={e => setSelecB3(e.target.value)}>
                            <option value={null}>select color</option>
                            <option value={0}>Black </option>
                            <option value={1}>Brown </option>
                            <option value={2}>Red   </option>
                            <option value={3}>Orange</option>
                            <option value={4}>Yellow</option>
                            <option value={5}>Green </option>
                            <option value={6}>Blue  </option>
                            <option value={-1}>Gold  </option>
                            <option value={-2}>silver</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="column">Tolerance</div>
                    <div class="column">
                        Colors&nbsp;&nbsp;&nbsp;
                        <select value={selecB4} onChange={e => setSelecB4(e.target.value)}>
                            <option value={null}>select color</option>
                            <option value={1}>White </option>
                            <option value={2}>Silver </option>
                            <option value={3}>Gold  </option>
                            <option value={4}>Brown</option>
                            <option value={5}>Red</option>
                            <option value={6}>Green </option>
                            <option value={7}>Blue </option>
                            <option value={8}>Purple  </option>
                            <option value={9}>Grey</option>
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FoBrand