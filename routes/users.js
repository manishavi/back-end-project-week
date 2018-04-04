const express = require('express');

const router = express.Router();

router.get('/', () => {
    res.json({ success: true});
});

module.exports = router;
