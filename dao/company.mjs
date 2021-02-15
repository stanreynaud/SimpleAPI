import {DAO} from './dao.mjs'

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

  async create(company) {
  }

  async get(dptId) {
  }

  async getAll(db) {
    db.db('companies').collection("startup_log").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db_ref.close();
    });
  }

  async update (dpt) {
  }

  async delete (dpt) {
  }
}

export { Company, CompanyDAO }