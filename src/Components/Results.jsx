import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
	const ResultData = calculateInvestmentResults(input);
	return (
		<section id="result">
			<table>
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
					{ResultData.map((data) => {
						return (
							<tr key={data.year}>
								<td>{data.year}</td>
								<td>{formatter.format(data.investmentValue)}</td>
								<td>{formatter.format(data.valueEndOfYear)}</td>
								<td>{formatter.format(data.interest)}</td>
								{/* <td>{formatter.format(data)}</td> */}
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
}
