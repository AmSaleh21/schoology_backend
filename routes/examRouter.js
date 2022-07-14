const {create,list,save,listBycourseId,listByclassId , listStudentExamByExamId,listByTeacherId , listStudentExams,
    getStudentExams, getMyChildExams
} = require("../controllers/examController")
const  {validateCreateExamRequest} = require("../middleware/requestValidators/exams/createExamRequest")
const {isTeacher , isStudent , isParent} = require('../middleware/roleAuthorization/role')
const express = require("express");
const router = express.Router();
const passport= require('passport')
router.use(passport.authenticate('jwt', { session: false }))

router.post("/create" , isTeacher , validateCreateExamRequest , create)
router.get("/list" , list)
router.get("/my-exams" ,isStudent , getStudentExams) //lists all exams for certain student
router.get("/my-child-exams" ,isParent , getMyChildExams) //lists all exams for certain student
router.get("/list/course/:id" , listBycourseId) //list all exams for one course
router.get("/list/class/:id" , listByclassId) // list all exams for one class
router.get("/list/scores/:id" , listStudentExamByExamId) //lists students with scores for certian exam
router.get("/list/teacher/:id" , listByTeacherId) //lists students with teacher for certian exam

router.post("/save" , save) // saves students score to the database given body -> { "link" : "google form url here" }

module.exports = router