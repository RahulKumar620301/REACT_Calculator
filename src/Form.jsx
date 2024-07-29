import { useState } from "react"

export default function Form() {
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
    const [bmivalue,setBmivalue]=useState('');
    const [message,setMessage]=useState('');
    const [color,setColor]=useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(weight==''||height==''){
            setMessage('Input required values')
        }
        else{
            const bmi = weight/(height*height);
            setBmivalue(bmi.toFixed(2));
            if(bmi<18.5){
                setMessage('Under weight');
                setColor('info')
            }
            else if(bmi>=18.5 && bmi<25){
                setMessage('Normal weight');
                setColor('success');
            }
            else if(bmi>=25 && bmi<30){
                setMessage('Overweight');
                setColor('warning');
            }
            else{
                setMessage('Obsese');
                setColor('danger');
            }
        }
    }


  return (
    <div className="container py-4">
        <div className="row justify-content-center">
            <div className="col-5 p-5 border border-2">
                <p className="display-6 text-center text-danger">BMI Calculator</p>
                <p className="text-center text-muted small">Body Mass Index (BMI)</p>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" placeholder="" className="form-control"
                        onChange={(e)=>setWeight(e.target.value)}/>
                        <label>Weight(kg) *</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" placeholder="" className="form-control"
                        onChange={(e)=>setHeight(e.target.value)}/>
                        <label>Height (m) *</label>
                    </div>
                    <button className="btn btn-outline-danger w-100" onClick={handleSubmit}>Calculate BMI !</button>
                </form>
                <div className={"alert alert-"+color+" text-center mt-3"}>
                    <p className="display-6">BMI - {bmivalue}</p>
                    <p className="fs-3"> {message}! </p>
                </div>
            </div>
        </div>
    </div>
  )
}
