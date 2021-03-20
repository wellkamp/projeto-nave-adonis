const Naver = use('App/Models/Naver')

class NaverController {
  async index ({ response }) {
    try {
      const getAllNavers = await Naver
      .query()
      //.select('name','job_role','birthdate','admission_date')
      .with('projects')
      .fetch()
      response.status(200).json(getAllNavers)
    } catch(err) {
      return response.status(500).json(err.message)
    }
      
  }

  async store ({ request, response }) {
    try {
      const { projects, ...data } = request.body
      const naver = await Naver.create(data)
      

      if (projects && projects.length > 0) {
        await naver.projects().attach(projects)
        naver.projects = await naver.projects().fetch()
      }
     
    return response.status(201).json({
      message:'ok',
      data: naver
    })
    } catch (err) {
      return response.status(500).json(err.message)
    }
  }

  async show ({ params, request, response, view }) {
    try {
      const naver = await Naver.find(params.id)
      const navers = await naver.projects().fetch()

      naver.navers = navers

      response.status(200).json({
        message: 'Projetos relacionados.',
        data: naver
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

module.exports = NaverController
