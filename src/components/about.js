import React, { useState } from 'react'



export default function About() {

// yeh mai ne usestate ko use kara hai default state yeh rakhi hai 
    const [myStyle, setMyStyle] = useState({
        color: '#000',
        backgroundColor: '#fff'
    })

    const[labelText, setLabelText] = useState('Light Mode On');

// yeh arrow function banaya hai jo button pr call ho raha h or 
// if-else statement ke throw buttom pr dark mode on/of krwa raha hn 
    const toggleStyle = ()=>{
        if(myStyle.backgroundColor === '#fff'){
            setMyStyle({
            color: '#fff',
            backgroundColor: '#000'
            })
            setLabelText('Dark Mode On'); // agr meri condition true hoti hai tw label ka text bhi set kraya hai 

        }else{
            setMyStyle({
            color: '#000',
            backgroundColor: '#fff'
            })
            setLabelText('Light Mode On'); // agr condition false hai tw label ka text set karwaya hai
        }
        
    }
    

  return (
    <>
    <div className='container mb-5 p-5' style={myStyle}>
        <h1 className='my-4'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" >
                <button className="accordion-button bg-danger-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-danger-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" style={myStyle}>
                <button className="accordion-button collapsed bg-danger-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <div className="form-check form-switch mt-4">
            <input onClick={toggleStyle} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">{labelText}</label>
        </div>

    </div>
    </>
  )
}
