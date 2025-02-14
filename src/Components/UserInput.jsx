export default function ({ userInput, onChangeInput }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<div>
					<label>Initial Investment</label>
					<input
						type="number"
						value={userInput.initialInvestment}
						onChange={(event) =>
							onChangeInput("initialInvestment", event.target.value)
						}
					/>
				</div>
				<div>
					<label>Annual Investment</label>
					<input
						type="number"
						value={userInput.annualInvestment}
						onChange={(event) =>
							onChangeInput("annualInvestment", event.target.value)
						}
					/>
				</div>
			</div>
			<div className="input-group">
				<div>
					<label>Expected Return</label>
					<input
						type="number"
						value={userInput.expectedReturn}
						onChange={(event) =>
							onChangeInput("expectedReturn", event.target.value)
						}
					/>
				</div>
				<div>
					<label>Duration</label>
					<input
						type="number"
						value={userInput.duration}
						onChange={(event) => onChangeInput("duration", event.target.value)}
					/>
				</div>
			</div>
		</section>
	);
}
