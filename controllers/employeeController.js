const Employee = require('../models/employeeModel');


exports.createEmployee = async (req, res, next) => {
    const employee = await Employee.create({
        name: req.body.name,
        salary: req.body.salary,
        department: req.body.department,
        email: req.body.email,
        phone: req.body.phone,
        status: req.body.status
    });

  if (!employee) {
    next(
        console.log('error'),
        500
      );
    }

    res.status(200).json({
        status: 'success',
        Empoyee: {
          employee
        }
      });
};

exports.getEmployees = async (req, res, next) => {
  const limitValue = req.query.limit || 2;
  const skipValue = req.query.skip || 0;
  
  const employee = await Employee.find() 
  .limit(limitValue)
  .skip(skipValue);
  
  if (!employee) {
    next(
      console.log('error'),
      500
    );
  }

  res.status(200).json({
    status: 'success',
    Empoyee: {
      employee
    }
  });

};

exports.getEmployee= async (req, res, next) => {
  const employee = await Employee.findById(req.params._Id);
  console.log('working');

  if (!employee) {
    next(
      console.log('error'),
      500
    );
  }

  res.status(200).json({
    status: 'success',
    results: employee
  });
};

exports.updateEmployee = async (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));

  const employee = await Employee.findByIdAndUpdate(req.params.id, obj, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!employee) {
    next(
        console.log('error'),
        500
      );
  }

  res.status(200).json({
    status: 'success',
    employee: {
      employee
    }
  });

};

exports.deleteEmployee = async (req, res, next) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);

  if (!employee) {
    next(
      console.log('error'),
      500
    );
  }

  res.status(204).json({
    status: 'success',
    message: 'deleted!',
    data: null
  });

};

exports.deleteEmployees = async (req, res, next) => {
  const employee = await Empoyee.deleteMany();

  if (!employee) {
    next(
        console.log('error'),
        500
      );
  }

  res.status(204).json({
    status: 'success',
    message: 'deleted!',
    data: null
  });

};