/** @format */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Requisitions', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			requestId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true,
			},
			submittedBy: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			jobTitle: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			employmentType: {
				type: Sequelize.ENUM(
					'Full-time',
					'Part-time',
					'Contract',
					'Internship'
				),
				allowNull: false,
			},
			justification: {
				type: Sequelize.STRING(600),
				allowNull: false,
			},
			recruitingManager: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			department: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			date: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
			resasonOfRecruitment: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			businessNeed: {
				type: Sequelize.STRING(600),
				allowNull: true,
			},
			noOfVacancies: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			reportsTo: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			experience: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			responsibilities: {
				type: Sequelize.STRING(600),
				allowNull: false,
			},
			skills: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			education: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			workExperience: {
				type: Sequelize.STRING(600),
				allowNull: false,
			},
			skillsQualifications: {
				type: Sequelize.STRING(600),
				allowNull: false,
			},
			salarySlipOfEmployee: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			designation: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			BudgetaryImpact: {
				type: Sequelize.INTEGER,
				references: {
					model: 'BudgetaryImpact',
					key: 'id',
				},
				allowNull: false,
			},
			recommendedApproaches: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			supportingDocuments: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			requestBy: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			reviewdBy: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			approvedBy: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			FirstPhase: {
				type: Sequelize.INTEGER,
				references: {
					model: 'FirstPhase',
					key: 'id',
				},
				allowNull: true,
			},
			candidateAssesment: {
				type: Sequelize.INTEGER,
				references: {
					model: 'CandidateAssesment',
					key: 'id',
				},
				allowNull: true,
			},
			interview: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Interviews',
					key: 'id',
				},
				allowNull: false,
			},
			budget: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Budget',
					key: 'id',
				},
				allowNull: true,
			},
			approval: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Approvals',
					key: 'id',
				},
				allowNull: true,
			},
			planning: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Planning',
					key: 'id',
				},
				allowNull: false,
			},
			screening: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Screening',
					key: 'id',
				},
				allowNull: true,
			},
			phoneInterview: {
				type: Sequelize.INTEGER,
				references: {
					model: 'PhoneInterviews',
					key: 'id',
				},
				allowNull: true,
			},
			Programmingtest: {
				type: Sequelize.INTEGER,
				references: {
					model: 'ProgrammingTest',
					key: 'id',
				},
				allowNull: true,
			},
			PanelInterview: {
				type: Sequelize.INTEGER,
				references: {
					model: 'PanelInterview',
					key: 'id',
				},
				allowNull: false,
			},
			backgroundCheck: {
				type: Sequelize.INTEGER,
				references: {
					model: 'backgroundCheck',
					key: 'id',
				},
				allowNull: true,
			},
			Comments: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Comments',
					key: 'id',
				},
				allowNull: true,
			},
			ContractSigning: {
				type: Sequelize.INTEGER,
				references: {
					model: 'ContractSigning',
					key: 'id',
				},
				allowNull: true,
			},
			Desicion: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Desicion',
					key: 'id',
				},
				allowNull: true,
			},
			offerAcceptancePeriod: {
				type: Sequelize.INTEGER,
				references: {
					model: 'offerAcceptancePeriod',
					key: 'id',
				},
				allowNull: true,
			},
			OnboardingProccess: {
				type: Sequelize.INTEGER,
				references: {
					model: 'OnBoardingProcess',
					key: 'id',
				},
				allowNull: true,
			},
			OneToOneInterview: {
				type: Sequelize.INTEGER,
				references: {
					model: 'OneToOneInterview',
					key: 'id',
				},
				allowNull: true,
			},
			PresentOffer: {
				type: Sequelize.INTEGER,
				references: {
					model: 'PresentOffer',
					key: 'id',
				},
				allowNull: true,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Requisitions');
	},
};
