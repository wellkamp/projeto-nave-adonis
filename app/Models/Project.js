'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
    navers() {
        return this
        .belongsToMany('App/Models/Naver')
        .pivotTable('projects_navers')
    }
}

module.exports = Project
