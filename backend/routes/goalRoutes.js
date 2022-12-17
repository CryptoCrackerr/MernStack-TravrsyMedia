const express = require("express")
const router = express.Router()

const {getGoals,setGoal,updateGoal,deleteGoal} = require('../goalControllers/goalController')

router.route('/').get(getGoals).post(setGoal) // route would be 'http://localhost:5000/api/goals'
router.route('/:id').put(updateGoal).delete(deleteGoal) // route would be 'http://localhost:5000/api/goals//121321'

module.exports = router


