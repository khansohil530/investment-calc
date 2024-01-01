import { useState } from "react";

const UserInput = ({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
    handleInputChange,
}) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={initialInvestment}
                        onChange={(event) =>
                            handleInputChange(
                                "initialInvestment",
                                event.target.value
                            )
                        }
                    />
                </p>
                <p>
                    <label>Anuual Investment</label>
                    <input
                        type="number"
                        required
                        value={annualInvestment}
                        onChange={(event) =>
                            handleInputChange(
                                "annualInvestment",
                                event.target.value
                            )
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={expectedReturn}
                        onChange={(event) =>
                            handleInputChange(
                                "expectedReturn",
                                event.target.value
                            )
                        }
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={duration}
                        onChange={(event) =>
                            handleInputChange("duration", event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
};

export default UserInput;
