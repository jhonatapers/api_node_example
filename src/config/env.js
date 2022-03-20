require('dotenv').config()
var args = process.argv.slice(2);


function dev() {
    return {
        env: process.env.ENV_DEV || 'development',                
        secret: process.env.SECRET_DEV || '123456',
        admEmail: process.env.ADMIN_EMAIL || 'teste@email.com',
        admPwd: process.env.ADMIN_PASSWORD || '123456',
        apiName: process.env.API_NAME || 'Api Example',
        apiProtocol: process.env.PROTOCOL || 'http',
        apiUrl: require('ip').address() || process.env.URL,
        apiPort: process.env.PORT || '3030',
        dataConfig: {
            dialect: 'mysql',
            dialectOptions: {
                useUTC: false
            },
            storage: './database.sqlite3'
        }                 
    }
}

function prod() {
    return {
        env: process.env.ENV_PRD || 'production',                
        secret: process.env.SECRET_PRD || '123456',
        admEmail: process.env.ADMIN_EMAIL || 'teste@email.com',
        admPwd: process.env.ADMIN_PASSWORD || '123456',
        apiName: process.env.API_NAME || 'Api Example',
        apiProtocol: process.env.PROTOCOL || 'http',
        apiUrl: require('ip').address(),
        apiPort: process.env.PORT || '9000',
        dataConfig: {
            dialect: 'mysql',
            dialectOptions: {
                useUTC: false
            },
            storage: './database.sqlite3'
        }                 
    }
}

if(args.length > 0)
{ 
    switch(args[0])
    {
        case 'prod':
            module.exports = prod()
            break;
        case 'dev':
            module.exports = dev()
            break;
        default:
            module.exports = dev()
            break;
    }
}else
{
    module.exports = dev()
}

