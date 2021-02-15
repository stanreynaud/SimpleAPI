class Product {
    constructor (name, price, compnay_symbol) {
      this.name = name
      this.price = price
      this.compnay_symbol = compnay_symbol
    }
    set name (name) { this.name = name }
    get name () { return this.name }
  
    set name (name) { this.name = name }
    get name () { return this.name }
  
    set name (name) { this.name = name }
    get name () { return this.name }
  
    toString () { return this.name+" "+this.price+" "+this.compnay_symbol }
  }

class ProductDAO extends DAO {
    constructor () {
      super()
    }
  
    async create(company) {
    }
  
    async get(dptId) {
    }
  
    async getAll() {
    }
  
    async update (dpt) {
    }
  
    async delete (dpt) {
    }
  }
  