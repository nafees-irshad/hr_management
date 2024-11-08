/** @format */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Comments', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},

			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Users",
					key: 'id',
				},
			},
			comment: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Comments');
	},
};
