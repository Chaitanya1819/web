
import {calculateInvestmentResults} from '../util/investment.js'
import { formatter } from '../util/investment.js';
export default function Results({input}){
    const Resultsdata= calculateInvestmentResults(input);
    
    const initialInvestment = Resultsdata[0].valueEndOfYear -Resultsdata[0].interest -Resultsdata[0].annualInvestment;
    console.log(Resultsdata);
    return(
        <table id ="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested capital</th>
            </tr>
            </thead>
            <tbody>
                {Resultsdata.map(yearData =>{
                    const TotalInterest = yearData.valueEndOfYear -yearData.annualInvestment * yearData.year -initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear -TotalInterest
                    return <tr key ={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(TotalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>)

    
}