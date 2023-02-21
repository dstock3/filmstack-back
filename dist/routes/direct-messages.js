"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.directMessages));
});
router.get('/:dmid', (req, res) => {
    return res.send(req.context.models.directMessages[req.params.dmid]);
});
router.post('/', (req, res) => {
    const id = (0, uuid_1.v4)();
    const directMessage = {
        id,
        text: req.body.text,
        userId: req.context.me.id,
    };
    req.context.models.directMessages[id] = directMessage;
    return res.send(directMessage);
});
router.delete('/:dmid', (req, res) => {
    const _a = req.context.models.directMessages, _b = req.params.dmid, message = _a[_b], otherMessages = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    req.context.models.directMessages = otherMessages;
    return res.send(directMessage);
});
exports.default = router;
