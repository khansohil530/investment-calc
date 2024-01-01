import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ userInput }) => {
    const results = calculateInvestmentResults(userInput);

    return (
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Inerest (Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => {
                    const totalInterest =
                        result.valueEndOfYear -
                        result.year * result.annualInvestment -
                        userInput.initialInvestment;
                    const investedCapital =
                        result.year * result.annualInvestment +
                        userInput.initialInvestment;
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Results;
