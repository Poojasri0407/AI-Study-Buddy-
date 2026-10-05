const express = require("express");

const {
    createStudyMaterial,
    getStudyMaterials,
    getStudyMaterialById,
    updateStudyMaterial,
    deleteStudyMaterial
} = require("../controllers/studyController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create study material
router.post(
    "/",
    authMiddleware,
    createStudyMaterial
);

// Get all study materials
router.get(
    "/",
    authMiddleware,
    getStudyMaterials
);

// Get single study material by ID
router.get(
    "/:id",
    authMiddleware,
    getStudyMaterialById
);
// Delete study material
router.delete(
    "/:id",
    authMiddleware,
    deleteStudyMaterial
);
// Update study material
router.put(
    "/:id",
    authMiddleware,
    updateStudyMaterial
);

module.exports = router;