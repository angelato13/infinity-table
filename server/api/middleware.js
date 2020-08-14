const isAdminMiddleware = (req, res, next) => {
  const currentUser = req.user
  const adminStatus = currentUser ? currentUser.isAdministrator : false

  if (adminStatus) {
    next()
  } else {
    const error = new Error('This requires administrator privileges.')
    error.status = 401
    next(error)
  }
}

const isEnabledMiddleware = (req, res, next) => {
  const currentUser = req.user

  if (currentUser && currentUser.isEnabled) {
    next()
  } else {
    const error = new Error('This requires enablement.')
    error.status = 401
    next(error)
  }
}

const isSameUserMiddleware = (req, res, next) => {
  const {userId} = req.params
  const currentUser = req.user
  const currentUserId = currentUser ? currentUser.id : null
  const adminStatus = currentUser ? currentUser.isAdministrator : false

  if (Number(userId) === currentUserId || adminStatus) {
    next()
  } else {
    const error = new Error('Users only have access to their own information.')
    error.status = 401
    next(error)
  }
}

module.exports = {isAdminMiddleware, isSameUserMiddleware, isEnabledMiddleware}
