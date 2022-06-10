module.exports = {
    apps: [
        {
            name: 'my-app',
            exec_mode: 'cluster',
            instances: 2,
            script: './index.js',
        }
    ]
}