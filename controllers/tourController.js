const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  const id = +req.params.id;
  if (id > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: tour,
  });
};

exports.createTour = (req, res) => {
  // need use middleware express.json()
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;

  // connect id and other items
  const id = { id: newId };
  const newTour = Object.assign(id, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    () => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  const id = +req.params.id;
  if (id > tours.length) {
    res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Update tour here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
};
