const { AuthenticationError } = require('apollo-server-express')
const{ User, Book } = require('../models');
const{ AutheticationToken, signToken} = require('../utils/auth');

const resolvers = {
    Query:{
        me: (parent, args, context) => {
            if(context.user) {
                const user = await User.findById({_id: context.user._id})
                .select('-__v -password')
                .populate(books);

                return user;
            }
            throw new AuthenticationError('please log in to view your books.');
        }
    }
}