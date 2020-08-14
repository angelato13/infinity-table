const router = require('express').Router()
const {User} = require('../db/models')
const {isAdminMiddleware, isSameUserMiddleware} = require('./middleware.js')
module.exports = router

router.get('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'isEnabled', 'isAdministrator']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', isSameUserMiddleware, async (req, res, next) => {
  try {
    const {userId} = req.params
    const users = await User.findByPk(userId, {
      attributes: ['email', 'isEnabled', 'isAdministrator']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {email, password} = req.body
    const newUser = await User.create({
      email,
      password
    })
    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', isAdminMiddleware, async (req, res, next) => {
  try {
    const {userId} = req.params
    const {isAdministrator, isEnabled} = req.body
    const users = await User.update(
      {isAdministrator, isEnabled},
      {where: {id: userId}}
    )
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', isSameUserMiddleware, async (req, res, next) => {
  try {
    const {userId} = req.params
    const {email, password} = req.body
    const users = await User.update({email, password}, {where: {id: userId}})
    res.json(users)
  } catch (err) {
    next(err)
  }
})
