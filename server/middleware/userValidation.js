class UserValidators {
  static signupValidator(req, res, next) {
    const {
      first_name,
      last_name,
      email,
      address,
      password,
    } = req.body;

    // First name validation
    if (first_name === undefined) {
      return res.status(400)
        .send({
          status: 400,
          message: 'First name is required',
        });
    }

    if (typeof first_name !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'First name must be a string',
        });
    }
    if (!/^([A-Za-z]){2,25}$/.test(first_name)) {
      return res.status(400).json({
        status: '400',
        message: 'First name must be an alphabet with length 2 to 25',
      });
    }

    if (last_name === undefined) {
      return res.status(400)
        .send({
          status: 400,
          message: 'Last name is required',
        });
    }

    if (typeof last_name !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'Last name must be a string',
        });
    }
    if (!/^([A-Za-z-]){2,25}$/.test(last_name)) {
      return res.status(400).json({
        status: '400',
        message: 'Last name must be an alphabet with length 2 to 25',
      });
    }

    if (!email) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your email is required',
        });
    }
    if (email.includes(' ')) {
      return res.status(400)
        .send({
          status: 400,
          message: 'email cannot include space.',
        });
    }
    if (typeof email !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'email must be a string',
        });
    }
    if (address === undefined) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your address is required',
        });
    }

    if (typeof address !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'address must be a string',
        });
    }
    if (!password) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your password is required',
        });
    }

    if (typeof password !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'password must be a string',
        });
    }

    if (password.includes(' ')) {
      return res.status(400)
        .send({
          status: 400,
          message: 'password cannot contain spaces',
        });
    }
    if (password.length < 5 || password.length > 30) {
      return res.status(400).send({
        status: 400,
        message: 'password should be 5 to 30 characters long',
      });
    }
    next();
  }

  static signinValidator(req, res, next) {
    const {
      email,
      password,
    } = req.body;

    if (!email) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your email is required',
        });
    }

    if (typeof email !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'email must be a string',
        });
    }
    const checkEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!checkEmailRegex.test(email)) {
      return res.status(400).send({
        status: 400,
        message: 'email address format is invalid',
      });
    }
    if (!password) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your password is required',
        });
    }
    if (typeof password !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'password must be a string',
        });
    }
    if (password.includes(' ')) {
      return res.status(400)
        .send({
          status: 400,
          message: 'password cannot contain spaces',
        });
    }
    if (password.length < 5 || password.length > 30) {
      return res.status(400)
        .send({
          status: 400,
          message: 'password should be 5 to 30 characters long',
        });
    }
    next();
  }

  static makeAdminValidator(req, res, next) {
    const {
      email,
    } = req.body;

    if (!email) {
      return res.status(400)
        .send({
          status: 400,
          message: 'your email is required',
        });
    }

    if (typeof email !== 'string') {
      return res.status(400)
        .send({
          status: 400,
          message: 'email must be a string',
        });
    }
    const checkEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!checkEmailRegex.test(email)) {
      return res.status(400).send({
        status: 400,
        message: 'email address format is invalid',
      });
    }
    next();
  }
}

const { signupValidator, signinValidator, makeAdminValidator, loginCheck } = UserValidators;
export { signupValidator, signinValidator, makeAdminValidator, loginCheck,
};
