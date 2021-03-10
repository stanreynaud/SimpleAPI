const DAO = require('./dao.js')

class Company {

  constructor (company, description, initial_price,symbol) {
    this.company = company
    this.description = description
    this.initial_price = initial_price
    this.symbol = symbol
  }

  setCompany (company) { this.company = company }
  getCompany () { return this.company }

  setDescription (description) { this.description = description }
  getDescription () { return this.namdescriptione }

  setInitial_price (initial_price) { this.initial_price = initial_price }
  getInitial_price () { return this.initial_price }

  setSymbol (symbol) { this.symbol = symbol }
  getSymbol () { return this.symbol }

  toString () { return this.company+" "+this.description+" "+this.initial_price+" "+this.symbol }
}

class CompanyDAO extends DAO {
  constructor () {
    super()
  }

  async create(database,company) {
    try {
      return await database.collection('companies').insertOne(
        {
          company : company.company,
          description : company.description,
          initial_price : company.initial_price,
          symbol : company.symbol
        }
      )
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  async get(database,symbol) {
    try {
      return await database.collection('companies').aggregate([
      {
        $lookup:
          {
            from: "products",
            localField: "symbol",
            foreignField: "company_symbol",
            as: "products"
          }
      },
      {
        $match : { symbol : symbol }
      }
    ]).toArray()
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  async getAll(database) {
    try {
      return await database.collection('companies').aggregate([{
        $lookup:
          {
            from: "products",
            localField: "symbol",
            foreignField: "company_symbol",
            as: "products"
          }
      }]).toArray()
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  async update (database,symbol,company) {
    try {
      return await database.collection('companies').update(
        {symbol : symbol},
        {
          $set: {
            company : company.company,
            description : company.description,
            initial_price : company.initial_price,
            symbol : company.symbol
          }
        }
      )
    } catch (err) {
        console.log(err)
        throw err
    }
  }

  async delete (database,symbol) {
    try {
      return await database.collection('companies').deleteOne({
        symbol : { $eq : symbol}
      })
    } catch (err) {
        console.log(err)
        throw err
    }
  }
}

module.exports = {Company, CompanyDAO}