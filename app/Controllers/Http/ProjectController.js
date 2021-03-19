const Project = use('App/Models/Project')


class ProjectController {
  async index ({ response }) {
    try {
      const getAllProjects = await Project
      .query()
      .with('navers')
      .fetch()
      return response.status(200).json(getAllProjects)
    } catch (e) {
      return response.status(500).json(e.message)
    }
    
  }

  async create ({ request, response, view }) {
    
  }

  async store ({ request, response }) {
    const { navers, ...data } = request.body
      const project = await Project.create(data)
      

      if (navers && navers.length > 0) {
        await project.navers().attach(navers)
        project.projects = await project.navers().fetch()
      }
     
    return response.status(201).json({
      message:'ok',
      data: project
    })
  }

  /**
   * Display a single project.
   * GET projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing project.
   * GET projects/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProjectController
