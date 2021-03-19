'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NaverSchema extends Schema {
  up () {
    this.create('navers', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('job_role').notNullable()
      table.date('birthdate').notNullable()
      table.date('admission_date').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('navers')
  }
}

module.exports = NaverSchema
