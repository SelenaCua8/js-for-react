
function requestHandler(req, res) {
    User.findById(req.userId)
      .then(function (user) {
        return Tasks.findById(user.tasksId)
      })
      .then(function (tasks) {
        tasks.completed = true;
        return tasks.save();
      })
      .then(function () {
        res.send('Tasks Completed!');
      })
      .catch(function (errors) {
        res.send(errors);
      });
  }

//de un res que es lo bueno y un catch lo malo
//catch se escribe una sola ves en toda la función
//esto es mas simple que las callbacks, las promesas hacen lo mismo pero es más legible 