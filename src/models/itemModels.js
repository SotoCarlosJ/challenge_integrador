const { conn } = require('../config/conn');

const getAll = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM product');
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (error) {
        const e = {
            isError: true,
            mssage: `No pudimos traer los productos, error: ${error}`
        };
        return e;
    } finally {
        await conn.releaseConnection();
    }
};

const getOne = async (params) => {
    try {
        const [rows] = await conn.query('SELECT * FROM product WHERE ?;', params);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (error) {
        const e = {
            isError: true,
            message: `No pudimos traer el producto seleccionado, error: ${error}`
        };
        return e;
    } finally {
        await conn.releaseConnection();
    }
};

const create = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES (?);', [params]);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (error) {
        const e = {
            isError: true,
            message: `No pudimos crear el producto, error: ${error}`
        }
        return e;
    } finally {
        await conn.releaseConnection();
    }
};

const edit = async (params, id) => {
    try {
        const [rows] = await conn.query('UPDATE product SET ? WHERE ?', [params, id]);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (error) {
        const e = {
            isError: true,
            message: `No pudimos editar el producto, error: ${error}`
        }
        return e;
    } finally {
        await conn.releaseConnection();
    }
};

const deleteOne = async (params) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    } catch (error) {
        const e = {
            isError: true,
            message: `No pudimos eliminar el producto seleccionado, error: ${error}`
        }
        return e;
    } finally {
        await conn.releaseConnection();
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    edit,
    deleteOne
};