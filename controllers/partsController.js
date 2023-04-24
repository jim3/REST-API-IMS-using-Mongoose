const PartsModel = require("../models/Parts");

// get all parts
const getParts = async (req, res) => {
    try {
        const parts = await PartsModel.find();
        if (!parts) {
            res.status(404).json({ success: false, message: "Could not find parts" });
            return;
        }
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

        // Validate required fields
        if (!partName || !partType || !quantity || !price) {
            res.status(400).json({ success: false, message: "Missing required fields" });
            return;
        }

        // Create a new document from the model
        const Parts = new PartsModel({
            partName,
            partType,
            quantity,
            price,
        });

        // Insert document into database
        // TODO - add error handling & validation
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
