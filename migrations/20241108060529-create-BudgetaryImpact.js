/** @format */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('BudgetaryImpact', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},

			salaryHead: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			amount: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('BudgetaryImpact');
	},
};
