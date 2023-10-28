const hasRole = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) next()
    else
      res
        .status(401)
        .send({ message: 'This role is not authorized for this operation.' })
  }
}

export default hasRole
