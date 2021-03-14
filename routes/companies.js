const {Company, CompanyDAO} = require('../dao/company.js')
const {authenticateToken} = require('../lib/authentication/authenticationFunctions')

// This file contains API endpoints declarations for the companies collection

const DAO = new CompanyDAO()

module.exports = function(app,DB){

    app.get('/companies', authenticateToken, async (req,res) => {
        try {
            res.json(await DAO.getAll(DB.db))
        }
        catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    })
    app.get('/companies/:symbol', authenticateToken, async (req,res) => {
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
    app.post('/companies', authenticateToken, async (req, res) => {
        const name = req.body.company
        const description =  req.body.description
        const initial_price = req.body.initial_price
        const symbol = req.body.symbol

        if (typeof name == 'undefined' &&
        typeof description == 'undefined' &&
        typeof initial_price == 'undefined' &&
        typeof symbol == 'undefined') {
            res.status(400).send()
        } else {
            try {
                let company = new Company(name,description,initial_price,symbol)
                await DAO.create(DB.db,company)
                res.status(201).json(company)
            }
            catch(err) {
                res.status(500).json(err)
            }
        }
    })
    app.delete('/companies/:symbol', authenticateToken, async (req,res) => {
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
    app.patch('/companies/:symbol', authenticateToken, async (req, res) => {
        let name = req.body.company
        let description =  req.body.description
        let initial_price = req.body.initial_price
        let symbol = req.body.symbol

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
                    name = (typeof name == 'undefined')?result[0].company:req.body.company
                    description = (typeof description == 'undefined')?result[0].description:req.body.description
                    initial_price = (typeof initial_price == 'undefined')?result[0].initial_price:req.body.initial_price
                    symbol = (typeof symbol == 'undefined')?result[0].symbol:req.body.symbol
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