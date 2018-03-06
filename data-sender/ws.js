const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  setInterval(
    () => ws.send(JSON.stringify(fetchData())),
    5000
  )
})

const fetchData = function() {
  return {
    metricBlock: [
      {
        title: 'SLA\'s',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#157DEC'
      },
      {
        title: 'SLA\'s',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#157DEC'
      },
      {
        title: 'SLA\'s Met',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#89C35C'
      },
      {
        title: 'SLA\'s Pending',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#E9AB17'
      },
      {
        title: 'SLA\'s Misses',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#F75D59'
      },
      {
        title: 'Active Delays',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#FF8040'
      },
      {
        title: 'Total Files',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#157DEC'
      },
      {
        title: 'SLA\'s Misses',
        kibanaLink: 'http://google.com',
        icon: 'glyphicon-stats',
        count: Math.floor(Math.random() * 10000),
        helpText: '',
        background: '#F75D59'
      },
    ],
    slaData: {
      name: 'XXX XXXX',
      Destination: 'AMAM XXX XXXXXX',
      File_Name: 'some_file_name1',
      Package: Math.floor(Math.random() * 10000),
      Est_Departure: '10:05 AM',
      SLA_Cutoff: '11:35 AM',
      Act_Delivery: '01:15 PM',
      Status: 'SAL_MISS'
    }
  }
}

server.listen(process.env.PORT || 8999, () => {
    console.log(`WebSocket is Started on Port ${server.address().port}`);
})