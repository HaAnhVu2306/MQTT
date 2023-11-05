var mqtt= require("mqtt")
var data= require("./data.json")

var mqtt = require("mqtt");

var options = {
  host: "85fa65bd6b29477e8a04d0cc7eaa005d.s2.eu.hivemq.cloud",
  port: 8883,
  protocol: "mqtts",
  username: "hienanhvu",
  password: "12345678Aa",
};

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on("connect", function () {
  console.log("Connected");
});

client.on("error", function (error) {
  console.log(error);
});

client.on("message", function (topic, message) {
  // called each time a message is received
  console.log("Received message:", topic, JSON.parse(message));
});

// subscribe to topic 'my/test/topic'
client.subscribe("my/test/topic");

onPublish = (message) => {
  client.publish("my/test/topic", JSON.stringify(data));
}

onPublish(data);