const express = require('express');
const path = require('path');
const indexRouter = require('./routes/routes');

const PORT = process.env.PORT || 8000;
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.listen(PORT,function () {
  console.log(`server has started on port ${PORT} !`)
})
