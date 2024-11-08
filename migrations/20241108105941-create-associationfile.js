/** @format */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Budget', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions', // Ensure this table exists
				key: 'id',
			},
			onDelete: 'CASCADE', // Optional: define delete behavior
		});
		// Define the foreign key constraint after creating the column
		await queryInterface.addColumn('BudgetaryImpact', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('CandidateAssesment', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		// Add the foreign key constraint after creating the column
		await queryInterface.addColumn('ContractSigning', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		// Add the foreign key constraint after creating the column
		await queryInterface.addColumn('Desicion', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('FirstPhase', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('Interviews', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('offerAcceptancePeriod', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('OnBoardingProcess', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('OneToOneInterview', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('PanelInterview', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('PhoneInterviews', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('PresentOffer', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('ProgrammingTest', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});

		await queryInterface.addColumn('Screening', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});
	},
	async down(queryInterface, Sequelize) {
		// Remove the foreign key if rolling back
		await queryInterface.removeColumn('Budget', 'requisitionId');
		await queryInterface.removeColumn('BudgetaryImpact', 'requisitionId');
		await queryInterface.removeColumn('CandidateAssesment', 'requisitionId');
		await queryInterface.removeColumn('Comments', 'requisitionId');
		await queryInterface.removeColumn('ContractSigning', 'requisitionId');
		await queryInterface.removeColumn('Desicion', 'requisitionId');
		await queryInterface.removeColumn('FirstPhase', 'requisitionId');
		await queryInterface.removeColumn('Interview', 'requisitionId');
		await queryInterface.removeColumn('offerAcceptancePeriod', 'requisitionId');
		await queryInterface.removeColumn('OnBoardingProcess', 'requisitionId');
		await queryInterface.removeColumn('OneToOneInterview', 'requisitionId');
		await queryInterface.removeColumn('PanelInterview', 'requisitionId');
		await queryInterface.removeColumn('PhoneInterviews', 'requisitionId');
		await queryInterface.removeColumn('PresentOffer', 'requisitionId');
		await queryInterface.removeColumn('ProgrammingTest', 'requisitionId');
		await queryInterface.removeColumn('Screening', 'requisitionId');
	},
};
