const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
    const token = request.cookies.jwt;
    if (!token) {
        return response.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        request.role = decoded.role;
        next();
    } catch (error) {
        return response.status(403).json({ message: 'Invalid or expired token' });;
    }
};
