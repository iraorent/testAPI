'use strict';

module.exports = {

    // Server port
    port: 4001,

    //Morgon
    morgon: {
        showInConsole: true,
        writeInFile: false
    },

    //MongoDB
    mongoDB: {
        url: 'mongodb://localhost/testAPI',
        //auditURL: 'mongodb://localhost/idealFrameWorkLog',
        file: { dbName: "testAPI", host: "localhost", port: 27017 },
        option: { server: { poolSize: 1000 } }
    }
};
