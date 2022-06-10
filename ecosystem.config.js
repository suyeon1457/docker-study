module.exports = {
    apps: [
        {
            name: 'my-app',
            exec_mode: 'cluster',
            instances: 1,
            script: './index.js',
        }
    ]
}