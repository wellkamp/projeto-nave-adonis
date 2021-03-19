'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Naver extends Model {
    projects() {
        return this
        .belongsToMany('App/Models/Project')
        .pivotTable('projects_navers')
    }
}

module.exports = Naver
