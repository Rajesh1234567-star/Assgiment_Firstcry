const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
    },

    salary: {
        type: Number
    },

    department: {
        type: String
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
    },

    phone: {
        type: Number
        },

    status: {
        type: Boolean
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;