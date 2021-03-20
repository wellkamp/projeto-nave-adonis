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

    try {
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
    } catch(err) {
      return response.status(500).json(err.message)
    }
    
  }

  async show ({ params, response }) {
    try {
      const project = await Project.find(params.id)
      const projects = await project.navers().fetch()

      project.projects = projects

      response.status(200).json({
        message: 'Naver relacionados.',
        data: project
      })
    } catch (err) {
      return response.status(500).json(err.message)
    }
  }


  async edit ({ params, request, response, view }) {
  }



  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = ProjectController
