const { getAll, getOne, create, edit, deleteOne } = require('../models/itemModels');

const getAllProducts = async () => {
    return await getAll();
};

const getOneProduct = async (id) => {
    return await getOne({product_id: id});
};

const createProduct = async (product) => {
    return await create(product);
};

const editProduct = async (product, id) => {
    return await edit(product, {product_id: id});
};

const deleteProduct = async (id) => {
    return await deleteOne({product_id: id});
};

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    editProduct,
    deleteProduct
};