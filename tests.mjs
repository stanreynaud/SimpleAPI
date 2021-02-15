import {CompanyDAO} from './dao/company.mjs'
import {DB} from './db/db.mjs'

const DAO = new CompanyDAO();
const db = new DB();
DB.open()
DAO.getAll(db.db)

/*
const r1 = await DAO.get(1);
console.log(r1);

const dpt = await DAO.create(new Departement(null, "dpt Test"));
console.log(dpt)

dpt.dptLibele = "nv nom 2";
const dpt_update = await DAO.update(dpt)

console.log(await DAO.getAll());

console.log(await DAO.delete(dpt))

console.log(await DAO.getAll());*/

