/** @format */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Comments', 'requisitionId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Requisitions',
			},
			onDelete: 'CASCADE',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Comments', 'requisitionId');
	},
};
