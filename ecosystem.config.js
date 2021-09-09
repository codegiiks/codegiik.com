module.exports = {
    apps: [{
        name: 'codegiik',
        script: 'node_modules/.bin/next',
        args: 'start -p 3001',
        cwd: '/var/www/codegiik',
        watch: './.next'
    }],

    deploy: {
        production: {
            user: 'root',
            key: '~/.ssh/id_rsa',
            host: '86.106.181.160',
            ref: 'origin/main',
            repo: 'git@github.com:codegiiks/clients.git',
            path: '/var/www/codegiik',
            'post-deploy': 'yarn && yarn build && pm2 reload /var/www/codegiik/ecosystem.config.js --env production'
        }
    }
}