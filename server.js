var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: server_port, path: '/', proxied: true});