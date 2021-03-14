const DAO = require('./dao.js')

// This file declares the product object and the product DAO

class Product {
    constructor (name, price, company_symbol) {
      this.name = name
      this.price = price
      this.company_symbol = company_symbol
    }
}

class ProductDAO extends DAO {
  constructor () {
    super()
  }

  async create(database,product) {
    try {
      return await database.collection('products').insertOne(
        {
          name : product.name,
          price : product.price,
          company_symbol : product.company_symbol
        }
      )
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  async get(database,name) {
    try {
      return await database.collection('products').find({name : name}).toArray()
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  async getAll(database) {
    try {
      return await database.collection('products').find({}).toArray()
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  async update (database,name,product) {
    try {
      return await database.collection('products').updateOne(
        {name : name},
        {
          $set: {
            name : product.name,
            price : product.price,
            company_symbol : product.company_symbol
          }
        }
      )
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  async delete (database,name) {
    try {
      return await database.collection('products').deleteOne({
        name : { $eq : name}
      })
    } catch (err) {
        console.log(err)
        throw err
    }
  }
}
  

  module.exports = {Product, ProductDAO}