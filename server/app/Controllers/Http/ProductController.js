'use strict'

const Product = use('App/Models/Product')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {

    const products = Product.query()
      .with('images')
      .fetch()

    return products
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'title',
      'description',
      'price'
    ])

    const product = await Product.create({ ...data, user_id: id })

    return product
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const product = await Product.findOrFail(params.id)

    await product.load('images')

    return product
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)

    const data = request.only([
      'title',
      'description',
      'price'
    ])

    product.merge(data)

    await product.save()

    return product
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const product = await Product.findOrFail(params.id)

    if (product.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await product.delete()
  }
}

module.exports = ProductController
