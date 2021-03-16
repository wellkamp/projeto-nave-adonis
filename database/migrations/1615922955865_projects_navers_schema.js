'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectsNaversSchema extends Schema {
  up () {
    this.create('projects_navers', (table) => {
      table.increments()
      table
        .integer('project_id')
        .unsigned()
        .index()
      table
        .foreign('project_id')
        .references('id')
        .inTable('projects')
        .onDelete('cascade')
      table
        .integer('naver_id')
        .unsigned()
        .index()
      table
        .foreign('naver_id')
        .references('id')
        .inTable('navers')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('projects_navers')
  }
}

module.exports = ProjectsNaversSchema
