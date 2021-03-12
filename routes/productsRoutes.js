const {Product, ProductDAO} = require('../dao/products.js')

const DAO = new ProductDAO()

module.exports = function(app,DB){

    app.get('/products', async (req,res) => {
        try {
            res.json(await DAO.getAll(DB.db))
        }
        catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    })
    app.get('/products/:name', async (req,res) => {
        try {
            let result = await DAO.get(DB.db,req.params.name)
            if (result.length == 0) {
                res.status(404).send()
            } else {
                res.json(result)
            }
        }
        catch(err) {
            res.status(500).json(err)
        }
    })
    app.post('/products', (req, res) => {
        const name = req.query.name
        const price = req.query.price
        const company_symbol = req.query.company_symbol

        if (typeof name == 'undefined' &&
        typeof price == 'undefined' &&
        typeof company_symbol == 'undefined') {
            res.status(400).send()
        } else {
            try {
                let product = new Product(name,price,company_symbol)
                DAO.create(DB.db,product)
                res.status(201).json(product)
            }
            catch(err) {
                res.status(500).json(err)
            }
        }
    })
    app.delete('/products/:company_symbol', async (req,res) => {
        try {
            let result = await DAO.get(DB.db,req.params.name)
            if (result.length == 0) {
                res.status(404).send()
            } else {
                const deleteResult = await DAO.delete(DB.db,req.params.name)
                result.push(deleteResult)
                res.json(result)
            }
        }
        catch(err) {
            res.status(500).json(err)
        }
    })
    app.patch('/products/:name', async (req, res) => {
        const name = req.query.name
        const price = req.query.price
        const company_symbol = req.query.company_symbol

        let result = await DAO.get(DB.db,req.params.name)

        if (typeof name == 'undefined' &&
        typeof price == 'undefined' &&
        typeof company_symbol == 'undefined') {
            res.status(400).send()
        } else {
            try {
                if (result.length == 0) {
                    res.status(404).send()
                } else {
                    let product = new Product(name,price,company_symbol)
                    const updateResult = await DAO.update(DB.db,req.params.name,product)
                    result.push(updateResult)
                    res.json(result)
                }
            }
            catch(err) {
                res.status(500).json(err)
            }
        }
    })


}