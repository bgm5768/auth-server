import dotenv from 'dotenv'

dotenv.config();

/*
    *server
      -> auth_server_port : express server port ( this auth service ) 
    
    *sqlite ( auth-server designed for MSA .. so i will use sqlite3 )
      -> databases_root_path : it's a root savepoint will be save database files
      -> database_file_names : just add db name ( it need be initalizing db file )
*/

export default {
    server : {
      auth_server_port: process.env.AUTH_SERVER_PORT,
    },
    sqlite: {
      databases_root_path: process.env.SQLITE_DATABASES_ROOT_PATH,
      database_file_names: {
        auth : 'auth.db',
        test : 'test.db',
      }
    }
}