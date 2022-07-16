const {Student , StudentExam , User} = require('../models');

const fillStudentExam = async  (examId , classId)=> {
studentsInClass = await Student.findAll({
    where: {
        classId: classId
    }
})
let recordsToInsert = [];
for (const student of studentsInClass) {

    recordsToInsert.push({
        studentId : student.id,
        examId : examId,
    })
    console.log("create exam student",student.id)
}
let studentsexams = await StudentExam.bulkCreate(recordsToInsert)
return studentsexams
}

module.exports = {fillStudentExam};