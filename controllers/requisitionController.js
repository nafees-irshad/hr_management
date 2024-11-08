/** @format */

const {
	Approval,
	backgroundCheck,
	BudgetaryImpact,
	Budget,
	CandidateAssesment,
	Comments,
	ContractSigning,
	Decision,
	FirstPhase,
	Interview,
	offerAcceptancePeriod,
	OnboardingProccess,
	OneToOneInterview,
	PhoneInterview,
	Programmingtest,
	PanelInterview,
	PresentOffer,
	Requisition,
	Screening,
	User,
} = require('../models');

const sequelize = require('../config/db.js');

exports.createRequisition = async (req, res) => {
	const {
		requestId,
		submittedBy,
		jobTitles,
		employmentType,
		justification,
		recruitingManager,
		department,
		date,
		reasonForRecruitment,
		businessNeed,
		noOfVanacies,
		reportsTo,
		experience,
		resposnitbilities,
		skills,
		education,
		workExperience,
		skillsAndQualifications,
		salarySlipOfEmployee,
		designation,
		BudgetaryImpact,
	} = req.body;
	const transaction = await sequelize.transaction(); // Start a transaction

	try {
		// Check if the requisition already exists
		const existingRequisition = await Requisition.findOne({
			where: { requestId: requestId },
		});

		if (existingRequisition) {
			// If found, return a message indicating that the requisition already exists
			return res
				.status(400)
				.json({ message: 'Requisition already exists with this Request ID.' });
		}
		// Step 1: Create a new requisition instance
		const newRequisition = new Requisition({
			userId: req.user.id,
			requestId,
			submittedBy,
			jobTitles,
			employmentType,
			justification,
			recruitingManager,
			department,
			date,
			reasonForRecruitment,
			businessNeed,
			noOfVanacies,
			reportsTo,
			experience,
			resposnitbilities,
			skills,
			education,
			workExperience,
			skillsAndQualifications,
			salarySlipOfEmployee,
			designation,
		});
		// Step 2: Save the requisition instance
		await newRequisition.save({ transaction }); // Use the transaction

		// Step 3: Insert budgetary impact data

		if (BudgetaryImpact && BudgetaryImpact.length) {
			for (let impact of BudgetaryImpact) {
				const newImpact = new BudgetaryImpact({
					requisitionId: newRequisition.id,
					salaryHead: impact.salaryHead,
					amount: impact.amount,
				});
				await newImpact.save({ transaction });
			}
		}
		res.status(201).json(newRequisition); // Send back the created requisition
	} catch (error) {
		await transaction.rollback(); // Rollback if there's an error
		res.status(500).json({ error: error.message }); // Handle any errors
	}
};
