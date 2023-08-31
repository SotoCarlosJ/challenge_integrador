const { conn } = require('../config/conn');

const getAll = async () => {
    try {
        const [ rows ] = await conn.query('SELECT * FROM funko_test.licence;');
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (error) {
        const e = {
            isError: true,
            mssage: `No pudimos traer las licencias, error: ${error}`
        };
        return e;
    } finally {
        await conn.releaseConnection();
    }
};

module.exports = {
    getAll
};