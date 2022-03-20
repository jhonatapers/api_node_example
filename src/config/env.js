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
            username: process.env.DBUSER,
            password: process.env.DBPASS_DEV,
            database: process.env.DBDATABASE_DEV,

            host: process.env.DBHOST_DEV,
            dialect: process.env.DBDIALECT,
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
        apiPort: process.env.PORT || '3030',
        dataConfig: {
            username: process.env.DBUSER,
            password: process.env.DBPASS_PRD,
            database: process.env.DBDATABASE_PRD,
            host: process.env.DBHOST_PRD,
            dialect: process.env.DBDIALECT,
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

