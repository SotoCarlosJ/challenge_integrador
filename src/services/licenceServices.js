const { getAll } = require('../models/licenceModels');

const getAllLicences = async () => {
    return await getAll();
};

module.exports = {
    getAllLicences
};