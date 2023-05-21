const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/validate-message', (req, res) => {

    let message = req.body.message

    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['../ai-module/ameen_ai.py', message, toString]);
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend);
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        messageStatus = true
        if (messageStatus) {
            var response = res.json({ status: 200, message: "Link is authorized!"});
            res.send(response)
        }
        else{
            var response = res.json({ status: 403, message: "Link is not authorized!"});
            res.send(response)
        }
        res.send(dataToSend)
    });

})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))