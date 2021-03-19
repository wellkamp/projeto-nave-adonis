const Naver = use('App/Models/Naver')

class NaverController {
  async index ({ response }) {
      const getAllNavers = await Naver
      .query()
      //.select('name','job_role','birthdate','admission_date')
      .with('projects')
      .fetch()
      response.status(200).json(getAllNavers)
  }

  async store ({ request, response }) {
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

    
    
  }

  /**
   * Display a single naver.
   * GET navers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing naver.
   * GET navers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update naver details.
   * PUT or PATCH navers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a naver with id.
   * DELETE navers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = NaverController
