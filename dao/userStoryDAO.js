const pool = require('/home/asus/Pulpit/Homework/SuperSprinter3000/poolDB.js');

const userStoryDAO = {
    "addUserStory": (title, story, criteria, businessValue, estimation, status) => {
        pool.query("INSERT INTO user_stories(story_title, user_story, acceptance_criteria ,business_value, estimation,status_story) VALUES($1,$2,$3,$4,$5,$6)", [title, story, criteria, businessValue, estimation, status]);
    },
    "updateUserStory": (id, title, story, criteria, businessValue, estimation, status) => {
        pool.query("UPDATE user_stories SET story_title=$1, user_story=$2, acceptance_criteria=$3, business_value=$4, estimation=$5, status_story=$6 WHERE id = $7",
            [title, story, criteria, businessValue, estimation, status, id]);
    },
    "getAllUserStories": async () => {
        const client = await pool.connect();
        const queryResult = await client.query("SELECT * FROM user_stories");
        client.release();
        return queryResult.rows;
    },
    "getUserStoryById": async (id) => {
        const client = await pool.connect();
        const queryResult = await client.query("SELECT * FROM user_stories WHERE id = " + id);
        client.release();
        console.log(queryResult.rows);
        return queryResult.rows;
    }
}
module.exports = userStoryDAO;
