import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Test route working fine brooo 🚀");
});

export default router;
