import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const  handlePrevious = () => {
    if(step > 1){
      // setStep(step - 1);
      setStep((step) => step - 1)
    }
  }
  const handleNext = () => {
    if (step < 3) {
      // setStep(step + 1);
      setStep((step) => step + 1 )
      // setStep((step) => step + 1 )
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is )}
        >&times;
      </button>
      { isOpen &&(
        <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active": ""}`}>1</div>
          <div className={`${step >= 2 ? "active": ""}`}>2</div>
          <div className={`${step >= 3 ? "active": ""}`}>3</div>
        </div>

        <p className="message">Step {step}: {messages[step-1]}</p>
        <div className="buttons">
          <Button 
            textColor="#fff" 
            bgColor="#7950f2" 
            onClick={handlePrevious} 
            text="Prev" 
      
          ><span>👈</span> Prev </Button>
          <Button 
            textColor="#fff" 
            bgColor="#7950f2" 
            onClick={handleNext} 
            text="Next" 
          > Next <span>👉</span></Button>

        </div>
      </div>)
      }
    </>
  );
}

const Button = ({textColor, bgColor, onClick, children}) => {
  return (
  <button 
    style={{backgroundColor: '#7950f2', color: "#fff"}} 
    onClick={onClick}
    >
      {children}
  </button>)
}

export default App;