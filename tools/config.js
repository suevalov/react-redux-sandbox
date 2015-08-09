const buildPath = 'build/';

export default {

    'serverport': 3000,

    'webpack': {
        'src': 'app/main.js',
        'dest': buildPath + 'assets',
        'filename': 'bundle.js',
        'cssFilename': 'bundle.css',
        'contentBase': 'app',
        'publicPath': '/assets/'
    },

    'styles': {
        'src': 'app/styles/main.less',
        'all': 'app/styles/**/*.less',
        'dest': buildPath + 'css'
    },

    'scripts': {
        'src': 'app/**/*.js',
        'dest': buildPath + 'js'
    },

    'images': {
        'src': 'app/images/**/*',
        'dest': buildPath + 'images'
    },

    'fonts': {
        'src': ['app/fonts/**/*'],
        'dest': buildPath + 'fonts'
    },

    'views': {
        'watch': [
            'app/index.html'
        ]
    },

    'gzip': {
        'src': buildPath + '**/*.{html,xml,json,css,js,js.map}',
        'dest': buildPath,
        'options': {}
    },

    'dist': {
        'root': buildPath
    }

};
