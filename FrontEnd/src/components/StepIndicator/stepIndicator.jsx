import "./stepIndicator.css";

const STEPS = [
    { number: 1, label: "Informações" },
    { number: 2, label: "Atributos" },
    { number: 3, label: "Perícias" },
];

function StepIndicator({ currentStep }) {
    return (
        <div className="step-indicator">
            {STEPS.map((step) => (
                <span
                    key={step.number}
                    className={`step-indicator-item ${currentStep === step.number ? "active" : ""}`}
                >
                    {step.number}. {step.label}
                </span>
            ))}
        </div>
    );
}

export default StepIndicator;