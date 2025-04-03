const express = require("express")
const verify_token = require('../middleware/Verification.js')
const router = express.Router() 
const {register, login, profile, wishlist, transaction,wishlist}=require("../controllers/userControllers.js")



router.post('/register/',register)
router.get('/login/',login)
router.get('/profile/',verify_token,profile)
router.get('/transaction/',verify_token,transaction)
router.get('/wishlist/',verify_token,wishlist)

module.exports= router;