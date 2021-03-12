const {Company, CompanyDAO} = require('../dao/company.js')

// This file contains API endpoints declarations for the companies collection

const DAO = new CompanyDAO()

module.exports = function(app,DB){

    app.get('/companies', async (req,res) => {
        try {
            res.json(await DAO.getAll(DB.db))
        }
        catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    })
    app.get('/companies/:symbol', async (req,res) => {
        try {
            let result = await DAO.get(DB.db,req.params.symbol)
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
    app.post('/companies', (req, res) => {
        const name = req.query.company
        const description =  req.query.description
        const initial_price = req.query.initial_price
        const symbol = req.query.symbol

        if (typeof name == 'undefined' &&
        typeof description == 'undefined' &&
        typeof initial_price == 'undefined' &&
        typeof symbol == 'undefined') {
            res.status(400).send()
        } else {
            try {
                let company = new Company(name,description,initial_price,symbol)
                DAO.create(DB.db,company)
                res.status(201).json(company)
            }
            catch(err) {
                res.status(500).json(err)
            }
        }
    })
    app.delete('/companies/:symbol', async (req,res) => {
        try {
            let result = await DAO.get(DB.db,req.params.symbol)
            if (result.length == 0) {
                res.status(404).send()
            } else {
                const deleteResult = await DAO.delete(DB.db,req.params.symbol)
                result.push(deleteResult)
                res.json(result)
            }
        }
        catch(err) {
            res.status(500).json(err)
        }
    })
    app.patch('/companies/:symbol', async (req, res) => {
        const name = req.query.company
        const description =  req.query.description
        const initial_price = req.query.initial_price
        const symbol = req.query.symbol

        let result = await DAO.get(DB.db,req.params.symbol)

        if (typeof name == 'undefined' &&
        typeof description == 'undefined' &&
        typeof initial_price == 'undefined' &&
        typeof symbol == 'undefined') {
            res.status(400).send()
        } else {
            try {
                if (result.length == 0) {
                    res.status(404).send()
                } else {
                    let company = new Company(name,description,initial_price,symbol)
                    const updateResult = await DAO.update(DB.db,req.params.symbol,company)
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