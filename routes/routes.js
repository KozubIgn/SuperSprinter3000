const express = require('express');
const router = express.Router();
const userStoryDao = require("../dao/userStoryDAO")

/* GET home page. */
router.get('/', async (req, res) => {
    const result = await userStoryDao.getAllUserStories().then(value => {
        return value;
    });
    // render homepage
    res.render('index', {routes: result});
})

router.get("/story", (req, res) => {
    res.render("addForm");
});
    router.post("/story", (req, res) => {
        const newUserStory = {
            title: req.body.title,
            story: req.body.story,
            criteria: req.body.criteria,
            businessValue: req.body.businessValue + " points",
            estimation: req.body.estimation + " h",
            status: "planning"
        }
        userStoryDao.addUserStory(newUserStory.title, newUserStory.story, newUserStory.criteria, newUserStory.businessValue, newUserStory.estimation, newUserStory.status);
       res.send("User story Added!") ;
    });

    router.get("/story/:id", async (req, res) => {
        const result = await userStoryDao.getUserStoryById(req.params.id).then(value => {
            return value;
        });
        //update page render
        res.render("updateForm", {
            id: result[0].id,
            title: result[0].story_title,
            story: result[0].user_story,
            criteria: result[0].acceptance_criteria,
            businessValue: result[0].business_value.replace(/\D/g, ''),
            estimation: result[0].estimation.replace(/\D/g, ''),
            status: result[0].status_story
        })
        console.log(result[0].id);
    });
    router.post("/story/:id", (req, res) => {
        const updatedUserStory = {
            title: req.body.title,
            story: req.body.story,
            criteria: req.body.criteria,
            businessValue: req.body.businessValue + " points",
            estimation: req.body.estimation + "h",
            status: req.body.status
        }
        userStoryDao.updateUserStory(req.params.id, updatedUserStory.title, updatedUserStory.story, updatedUserStory.criteria, updatedUserStory.businessValue, updatedUserStory.estimation, updatedUserStory.status);
        res.send("User story updated!") ;
    });

module.exports = router;
