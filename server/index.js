const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;


const md = require('mongoose')
const config = require('config')


const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  //app.use(express.json())

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  //ROUTES
  app.use('/api/photos', require('./api/photos'))
  app.use('/api/users', require('./api/users'))
  app.use('/api/users/register', require('./api/users'))
  
  //SET UP MONGODB
  const mongoURI = config.get('mongoURI')
  md.connect(mongoURI, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => console.log('MongoDB connected... :D'))
    .catch((err) => console.log(err))
  
  //SERVE HTML FILE (FOR NON API CALLS)
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}










const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
