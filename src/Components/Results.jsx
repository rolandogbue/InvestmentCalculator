import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
	const resultsData = calculateInvestmentResults(input);
	const initialtInvestment =
		resultsData[0].valueEndOfYear -
		resultsData[0].interest -
		resultsData[0].annualInvestment;

	// console.log(resulstData);
	return (
		<section >
			<table id="result">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{/* Add rows here */}
					{resultsData.map((data) => {
						const totalInterest =
							data.valueEndOfYear - data.annualInvestment * data.year;
						const investedCapital = data.valueEndOfYear - totalInterest;

						return (
							<tr key={data.year}>
								<td>{data.year}</td>
								<td>{formatter.format(data.valueEndOfYear)}</td>
								<td>{formatter.format(data.interest)}</td>
								<td>{formatter.format(totalInterest)}</td>
								<td>{formatter.format(investedCapital)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
}
