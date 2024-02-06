import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function App() {
  const [value, setValue] = useState('');
  return (

    <>
    <div className="App">
      <div>
        <div className='calculator card' id="calculator">
          <div>
            <input id="result" type="text" class="calculator-screen z-depth-1" value={value} />
          </div>
          <div class="calculator-keys">
                <Button type="button" variant="danger" className='text-light' id="a" onClick={e => setValue('')}>AC</Button>{' '}
                <Button type="button" variant="secondary" className='text-light o back' id="o" value="DE" onClick={e => setValue(value.slice(0, -1))}>DE</Button>{' '}
                <Button type="button" variant="secondary" className='back text-light o ' id="o" value="%" onClick={e => setValue(value + e.target.value)}>%</Button>{' '}
                <Button type="button" variant="" className='operator  btn-secondary  text-light e ' id="e" value="/" onClick={e => setValue(value + e.target.value)}>/</Button>{' '}
               
                <Button type="button" variant="" className='text-light  btn-secondary  waves-effect l ' id="l" value="7" onClick={e => setValue(value + e.target.value)}>7</Button>{' '}
                <Button type="button" variant="" className='text-light  btn-secondary  waves-effect l ' id="l"  value="8" onClick={e => setValue(value + e.target.value)} >8</Button>{' '}
                <Button type="button" variant="" className='text-light  btn-secondary  waves-effect l  ' id="l"  value="9" onClick={e => setValue(value + e.target.value)}>9</Button>{' '}
                <Button type="button" variant="" className='text-light  btn-secondary  waves-effect e operator ' id="e"  value="*" onClick={e => setValue(value + e.target.value)}>*</Button>{' '}
               
                <Button type="button" variant="secondary" className='text-light  waves-effect l  ' id="l"  value="4" onClick={e => setValue(value + e.target.value)}>4</Button>{' '}
                <Button type="button" variant="secondary" className='text-light  waves-effect l  ' id="l"  value="5" onClick={e => setValue(value + e.target.value)}>5</Button>{' '}
                <Button type="button" variant="secondary" className='text-light  waves-effect l ' id="l"  value="6" onClick={e => setValue(value + e.target.value)}>6</Button>{' '}
                <Button type="button" variant="secondary" className='text-light waves-effect e operator' id="e"  value="-" onClick={e => setValue(value + e.target.value)}>-</Button>{' '}
               
                <Button type="button" variant="secondary" className='text-light waves-effect l' id="l"  value="1" onClick={e => setValue(value + e.target.value)}>1</Button>{' '}
                <Button type="button" variant="secondary" className='text-light waves-effect l ' id="l"  value="2" onClick={e => setValue(value + e.target.value)}>2</Button>{' '}
                <Button type="button" variant="secondary" className='text-light waves-effect l ' id="l"  value="3" onClick={e => setValue(value + e.target.value)}>3</Button>{' '}
                <Button type="button" variant="secondary" className='text-light waves-effect e operator' id="e"  value="+" onClick={e => setValue(value + e.target.value)}>+</Button>{' '}

                <Button type="button" variant="secondary" className='zero operator btn btn-secondary text-light ' id="zero"  value="0" onClick={e => setValue(value + e.target.value)}>0</Button>{' '}
                <Button type="button" variant="secondary" className='back btn btn-secondary l text-light' id="l" value="." onClick={e => setValue(value + e.target.value)}>.</Button>{' '}
                <Button type="button" variant="secondary" className='btn waves-effect e text-light' id="e"  value="=" onClick={e => setValue(eval(value))}>=</Button>{' '}

          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
