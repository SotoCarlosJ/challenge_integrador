const { conn } = require('../config/conn');

const getAll = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM product');
        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        await conn.releaseConnection();
    }
};

const getOne = async (params) => {
    try {
        const [rows] = await conn.query('SELECT * FROM product WHERE ?;', params);
        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        await conn.releaseConnection();
    }
};

const create = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES (?);', [params]);
        return rows;
    } catch (error) {
        console.error(error);
    }
    finally {
        await conn.releaseConnection();
    }
};

const edit = async (params, id) => {
    try {
        const [rows] = await conn.query('UPDATE product SET ? WHERE ?;' [params, id]);
        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        await conn.releaseConnection();
    }
};

const deleteOne = async (params) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        await conn.releaseConnection();
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    edit,
    deleteOne
};