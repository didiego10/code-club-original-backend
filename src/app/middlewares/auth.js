import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

export default (request, response, next) => {
  const auThToken = request.headers.authorization

  if (!auThToken) {
    return response.status(401).json({ error: 'voce nao passou o token' })
  }

  const token = auThToken.split(' ')[1]

  try {
    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        throw new Error()
      }

      request.userId = decoded.id
      return next()
    })
  } catch (err) {
    return response.status(401).json({ error: 'Token esta invalido' })
  }
}
