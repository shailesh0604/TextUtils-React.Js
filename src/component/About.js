import React, { useState } from "react";

export default function Darkmode(props) {
    const [myStyle,setmyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const[buttonTxt,setbuttonTxt] = useState("Enable Dark Mode")

    const toggleBt = ()=>{
        if(myStyle.color ==='black'){
            setmyStyle({ color : 'white',
            backgroundColor : 'black'
        })
        setbuttonTxt("Disable Dark Mode")
    }
    else{
        setmyStyle({
            color:'black',
            backgroundColor:'white',
            border: '1px solid white'     
        })
        setbuttonTxt("Enable Dark Mode")
        }
        // let darkStyle = {
        //     color: 'black',
        //     backgroundColor:'white'
        // }
        
    }
    // setmyStyle(darkStyle)


    return (
    <div className="container" style={myStyle}>
        <h2 className="my-4">Some Info About Website</h2>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show" 
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse" style={myStyle}
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      <div>
        <div className="container form-check form-switch my-2">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onChange={toggleBt}
            id="flexSwitchCheckDefault togBtn"
          />
          <label className="form-check-label" forhtml="flexSwitchCheckDefault">{buttonTxt}
          </label>
        </div>
      </div>
    </div>
  );
}
