const express = require('express')
const courses = require('./courses.json');
const category = require('./category.json');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');




app.use(cors());

app.get('/', (req, res) => {
    res.send('your app is running')
});


//get all courses.
app.get('/courses', (req, res) => {
    res.send(courses);
});

//get all category
app.get('/category', (req, res) => {
    res.send(category)
});

//get courses according to category .
app.get(`/course/:id`, (req, res) => {
    const id = req.params.id;
    const course = courses.find(crs => crs._id == id);
    res.send(course);
});

//get single courses according to course id
app.get(`/courses/:id`, (req, res) => {
    const id = req.params.id;
    if (id == 36) {
        res.send(courses);
    } else {
        const categoryCourses = courses.filter(ctgCrs => ctgCrs.category_id == id);
        res.send(categoryCourses);
    }
});

app.listen(port, () => { });