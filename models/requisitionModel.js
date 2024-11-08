const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const User = require('../models/userModel.js');
const BudgetaryImpact = require('../models/budgetaryImpactModel.js');
const FirstPhase = require('../models/firstPhaseModel.js');
const CandidateAssesment = require('../models/candidateAssesmentModel.js');
const Interview = require('../models/interviewModel.js');
const Budget = require('../models/budgetModel.js');
const Approval = require('../models/approvalModel.js');
const Planning = require('../models/planningModel.js');
const Screening = require('../models/screeningModel.js');
const PhoneInterview = require('../models/phoneInterviewsModel.js');
const Programmingtest = require('../models/programmingTestModel.js');
const PanelInterview = require('../models/panelInterviewModel.js');
const backgroundCheck = require('../models/BackgroundCheckModel.js');
const Comments = require('../models/commentsModel.js');
const ContractSigning = require('../models/contractSigningModel.js');
const Desicion = require('../models/decisionModel.js');
const offerAcceptancePeriod = require('../models/offerAcceptancePeriodModel.js');
const OnboardingProccess = require('../models/onBoardingProcessModel.js');
const OneToOneInterview = require('../models/oneToOneInterviewModel.js');
const PresentOffer = require('../models/presentOfferModel.js');

const Requisition = sequelize.define(
	'Requisition',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		userId: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: 'id',
			},
		},
		requestId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
		},
		submittedBy: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		jobTitle: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		employmentType: {
			type: DataTypes.ENUM('Full-time', 'Part-time', 'Contract', 'Internship'),
			allowNull: false,
		},
		justification: {
			type: DataTypes.STRING(600),
			allowNull: false,
		},
		recruitingManager: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		department: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		resasonOfRecruitment: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		businessNeed: {
			type: DataTypes.STRING(600),
			allowNull: true,
		},
		noOfVacancies: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		reportsTo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		experience: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		responsibilities: {
			type: DataTypes.STRING(600),
			allowNull: false,
		},
		skills: {
			type: DataTypes.JSON,
			allowNull: false,
		},
		education: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		workExperience: {
			type: DataTypes.STRING(600),
			allowNull: false,
		},
		skillsQualifications: {
			type: DataTypes.STRING(600),
			allowNull: false,
		},
		salarySlipOfEmployee: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		designation: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		BudgetaryImpact: {
			type: DataTypes.INTEGER,
			references: {
				model: BudgetaryImpact,
				key: 'id',
			},
			allowNull: false,
		},
		recommendedApproaches: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		supportingDocuments: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		requestBy: {
			type: DataTypes.JSON,
			allowNull: false,
		},
		reviewdBy: {
			type: DataTypes.JSON,
			allowNull: false,
		},
		approvedBy: {
			type: DataTypes.JSON,
			allowNull: false,
		},
		FirstPhase: {
			type: DataTypes.INTEGER,
			references: {
				model: FirstPhase,
				key: 'id',
			},
			allowNull: true,
		},
		candidateAssesment: {
			type: DataTypes.INTEGER,
			references: {
				model: CandidateAssesment,
				key: 'id',
			},
			allowNull: true,
		},
		interview: {
			type: DataTypes.INTEGER,
			references: {
				model: Interview,
				key: 'id',
			},
			allowNull: false,
		},
		budget: {
			type: DataTypes.INTEGER,
			references: {
				model: Budget,
				key: 'id',
			},
			allowNull: true,
		},
		approval: {
			type: DataTypes.INTEGER,
			references: {
				model: Approval,
				key: 'id',
			},
			allowNull: true,
		},
		planning: {
			type: DataTypes.INTEGER,
			references: {
				model: Planning,
				key: 'id',
			},
			allowNull: false,
		},
		screening: {
			type: DataTypes.INTEGER,
			references: {
				model: Screening,
				key: 'id',
			},
			allowNull: true,
		},
		phoneInterview: {
			type: DataTypes.INTEGER,
			references: {
				model: PhoneInterview,
				key: 'id',
			},
			allowNull: true,
		},
		Programmingtest: {
			type: DataTypes.INTEGER,
			references: {
				model: Programmingtest,
				key: 'id',
			},
			allowNull: true,
		},
		PanelInterview: {
			type: DataTypes.INTEGER,
			references: {
				model: PanelInterview,
				key: 'id',
			},
			allowNull: false,
		},
		backgroundCheck: {
			type: DataTypes.INTEGER,
			references: {
				model: backgroundCheck,
				key: 'id',
			},
			allowNull: true,
		},
		Comments: {
			type: DataTypes.INTEGER,
			references: {
				model: Comments,
				key: 'id',
			},
			allowNull: true,
		},
		ContractSigning: {
			type: DataTypes.INTEGER,
			references: {
				model: ContractSigning,
				key: 'id',
			},
			allowNull: true,
		},
		Desicion: {
			type: DataTypes.INTEGER,
			references: {
				model: Desicion,
				key: 'id',
			},
			allowNull: true,
		},
		offerAcceptancePeriod: {
			type: DataTypes.INTEGER,
			references: {
				model: offerAcceptancePeriod,
				key: 'id',
			},
			allowNull: true,
		},
		OnboardingProccess: {
			type: DataTypes.INTEGER,
			references: {
				model: OnboardingProccess,
				key: 'id',
			},
			allowNull: true,
		},
		OneToOneInterview: {
			type: DataTypes.INTEGER,
			references: {
				model: OneToOneInterview,
				key: 'id',
			},
			allowNull: true,
		},
		PresentOffer: {
			type: DataTypes.INTEGER,
			references: {
				model: PresentOffer,
				key: 'id',
			},
			allowNull: true,
		},
	},
	{
		tableName: 'requisitions',
		timestamps: false,
	}
);

module.exports = Requisition;
