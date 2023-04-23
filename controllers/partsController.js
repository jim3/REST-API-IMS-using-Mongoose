const PartsModel = require("../models/Parts");

// get all parts
const getParts = async (req, res) => {
    try {
        const parts = await PartsModel.find();
        res.status(200).json({ success: true, data: parts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to get parts" });
    }
};

// create a part
const createPart = async (req, res) => {
    try {
        const { partName, partType, quantity, price } = req.body;

        const Parts = new PartsModel({
            partName,
            partType,
            quantity,
            price,
        });
        // Save the document to the database
        await Parts.save();

        res.status(201).json({ success: true, message: "Part created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to create part" });
    }
};

module.exports = {
    createPart,
    getParts,
};
