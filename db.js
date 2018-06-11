var mysql = require('mysql');

var PRODUCTION_DB = 'liveconference'
    , TEST_DB = 'liveconference';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
    pool: null,
    mode: null
};

exports.connect = function(mode, done) {
    state.pool = mysql.createPool({
        host: 'liveconference.mysql.dbaas.com.br',
        user: 'liveconference',
        password: 'Matheus2014!',
        database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
    });

    state.mode = mode;
    done()
};

exports.get = function() {
    return state.pool
};

