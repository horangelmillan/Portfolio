const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Models
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');
const { Email } = require('../utils/email.util');

const getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.findAll();

	res.status(200).json({
		status: 'success',
		users
	});
});

const createUser = catchAsync(async (req, res, next) => {
	const { name, email, password } = req.body;

	const salt = await bcrypt.genSalt(12);
	const hashPassword = await bcrypt.hash(password, salt);

	const newUser = await User.create({
		name,
		email,
		password: hashPassword
	});

	newUser.password = undefined;

	await new Email(email).sendWelcome(name);

	res.status(201).json({
		status: 'success',
		newUser
	});
});

const getUserById = catchAsync(async (req, res, next) => {
	const { user } = req;

	res.status(200).json({
		status: 'success',
		user
	});
});

const updateUser = catchAsync(async (req, res, next) => {
	const { user } = req;
	const { name } = req.body;

	await user.update({ name });

	res.status(204).json({ status: 'success' });
});

const deleteUser = catchAsync(async (req, res, next) => {
	const { user } = req;

	await user.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
});

const login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	const user = await User.findOne({
		where: {
			email,
			status: 'active'
		}
	});

	if (!user) {
		return next(new AppError('Credentials invalid', 400));
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) {
		return next(new AppError('Credentials invalid', 400));
	}

	const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
    
	res.status(200).json({
		status: 'success',
		token,
		user,
	});
});

const checkToken = catchAsync(async (req, res, next) => {
	const { sessionUser } = req;

	sessionUser.password = undefined;

	res.status(200).json({
		status: 'success',
		user: sessionUser,
	});
});

module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	login,
	checkToken,
};