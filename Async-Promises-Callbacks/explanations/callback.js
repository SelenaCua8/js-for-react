

//piramide de la muerte, muchas consultas
function requestHandler(req, res){
    User.findById(req.userId, function(err, user){
        if(err){
            res.send(err);
        } else {
            TextTrackList.findById(user.tasksId, function(err, task){
                if(err){
                    return res.send(err);
                }else {
                    task.completed = true;
                    task.save(function(err){
                        if(err){
                            return res.send(err);
                        }else{
                            res.send('Task Complited Success')
                        }
                    })
                }
            })
        }
    })
    
}
//entonces se puede hacer promesas!!!!
