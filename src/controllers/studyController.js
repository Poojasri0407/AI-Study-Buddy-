const StudyMaterial = require("../models/studyMaterials");

// Create study material
const createStudyMaterial = async (req, res) => {
    try {
        const { title, subject, content } = req.body;

        if (!title || !subject || !content) {
            return res.status(400).json({
                message: "Title, subject and content are required"
            });
        }

        const studyMaterial = await StudyMaterial.create({
            title,
            subject,
            content,
            createdBy: req.user.userId
        });

        res.status(201).json({
            message: "Study material created successfully",
            studyMaterial
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create study material",
            error: error.message
        });
    }
};


// Get all study materials
const getStudyMaterials = async (req, res) => {
    try {
        const materials = await StudyMaterial.find()
            .populate("createdBy", "name email");

        res.status(200).json({
            message: "Study materials fetched successfully",
            materials
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch study materials",
            error: error.message
        });
    }
};


// Get single study material by ID
const getStudyMaterialById = async (req, res) => {
    try {
        const material = await StudyMaterial.findById(req.params.id)
            .populate("createdBy", "name email");

        if (!material) {
            return res.status(404).json({
                message: "Study material not found"
            });
        }

        res.status(200).json({
            message: "Study material fetched successfully",
            material
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch study material",
            error: error.message
        });
    }
};


// Update study material
const updateStudyMaterial = async (req, res) => {
    try {
        const { title, subject, content } = req.body;

        const material = await StudyMaterial.findByIdAndUpdate(
            req.params.id,
            {
                title,
                subject,
                content
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!material) {
            return res.status(404).json({
                message: "Study material not found"
            });
        }

        res.status(200).json({
            message: "Study material updated successfully",
            material
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update study material",
            error: error.message
        });
    }
};


// Delete study material
const deleteStudyMaterial = async (req, res) => {
    try {
        const material = await StudyMaterial.findByIdAndDelete(
            req.params.id
        );

        if (!material) {
            return res.status(404).json({
                message: "Study material not found"
            });
        }

        res.status(200).json({
            message: "Study material deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete study material",
            error: error.message
        });
    }
};


// Export all functions
module.exports = {
    createStudyMaterial,
    getStudyMaterials,
    getStudyMaterialById,
    updateStudyMaterial,
    deleteStudyMaterial
};