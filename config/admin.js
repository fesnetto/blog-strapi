module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e148270e60bf047a5944454e06c2202'),
  },
});
