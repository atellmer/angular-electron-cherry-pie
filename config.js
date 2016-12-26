'use strict';

var config = {
	root: 'client',
	mode: process.env.NODE_ENV,
	debug: process.env.NODE_ENV !== 'production',
	distDir: 'dist'
}

module.exports = config;
