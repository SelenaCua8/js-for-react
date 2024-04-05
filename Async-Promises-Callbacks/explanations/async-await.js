async function requestHandler(req, res) {
    try {
      const user = await User.findById(req.userId);
      const tasks = await Tasks.findById(user.tasksId);
      tasks.completed = true;
      await tasks.save();
      res.send('Tasks Saved');
    }
    catch (e) {
      res.send(e);
    }
  }

  //lo mismo que callbacks, promises pero es más legible. Await: es un codigo que va a tomar tiempo de ejecución pq es un tiempo de ejecución 
  //orden: callbacks < promises < async await
  //try: trata de ejecutar un codigo si falla se pasa a un -> catch: errores