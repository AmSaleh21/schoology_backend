
const canCreateExam = async (req,res,next)=>{
    if(req.user.roleId === 1 || req.user.roleId === 4){
        next()
    }else{
        return res.status(403).send('User can Not Create Exam ')
    }
}

module.exports ={
    canCreateExam
}