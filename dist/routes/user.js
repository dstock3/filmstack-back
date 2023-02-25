"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const getUserContext = req => req.context.models.users;
router.get('/', (req, res) => {
    return res.send(Object.values(getUserContext(req)));
});
router.get('/:userId', (req, res) => {
    return res.send(getUserContext(req)[req.params.userId]);
});
exports.default = router;
