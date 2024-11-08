/** @format */

const User = require('./userModel.js');
const BudgetaryImpact = require('./budgetaryImpactModel.js');
const FirstPhase = require('./firstPhaseModel.js');
const CandidateAssesment = require('./candidateAssesmentModel.js');
const Interview = require('./interviewModel.js');
const Budget = require('./budgetModel.js');
const Approval = require('./approvalModel.js');
const Screening = require('./screeningModel.js');
const PhoneInterview = require('./phoneInterviewsModel.js');
const Programmingtest = require('./programmingTestModel.js');
const PanelInterview = require('./panelInterviewModel.js');
const backgroundCheck = require('./BackgroundCheckModel.js');
const Comments = require('./commentsModel.js');
const ContractSigning = require('./contractSigningModel.js');
const offerAcceptancePeriod = require('./offerAcceptancePeriodModel.js');
const OnboardingProccess = require('./onBoardingProcessModel.js');
const OneToOneInterview = require('./oneToOneInterviewModel.js');
const PresentOffer = require('./presentOfferModel.js');
const Decision = require('./decisionModel.js');
const Requisition = require('./requisitionModel.js');
// import other models as needed...

module.exports = {
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
	Requisition, // add Requisition model here...
	Screening,
	User,
};
