'use strict';

var dns = require('dns');  // https://nodejs.org/api/dns.html#dns_dns_getservers 
var ndns = require('native-dns'); 

exports.dnsNS = (req, res) => {
    //    const clientIp = requestIp.getClientIp(req); 
    //    console.log(clientIp);
    //    res.status(200).end(clientIp);
    let hostname = req.query.domainname||'httpbin.org';
    console.log('Testing Domain Name ' + hostname);
    dns.resolveNs(hostname, function (e, addr){
        if (e) {
            res.status(403).send(e);
        }  else {
            console.log('found ' + addr);
            res.status(200).send(addr);    
        }
    });
};  //exports.NS

exports.nativeNS = (req, res) => {
    //    const clientIp = requestIp.getClientIp(req); 
    //    console.log(clientIp);
    //    res.status(200).end(clientIp);
    let hostname = req.query.domainname||'httpbin.org';
    console.log('Testing Domain Name ' + hostname);
    ndns.resolveNs(hostname, function (e, addr){
        if (e) {
            res.status(403).send(e);
        }  else {
            console.log('found ' + addr);
            res.status(200).send(addr);    
        }
    });
};

