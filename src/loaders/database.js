import sqlite3 from 'sqlite3';
import fs from 'fs';

// config에 존재하는 db name list를 파일으로 write
export default function generateDatabase(sqliteConfig) {
    const rootPath = sqliteConfig.databases_root_path;

    new Promise((resolve, reject) => {
        fs.exists(rootPath , (exists) => {
            if(exists === false) {
                fs.mkdir(rootPath , () => { resolve('');});
            } else {
                resolve('');
            }
        });
    }).then(
        () => {
            const errCallBackFunction = (err) => {
                if (err === null) {
                    // success generate auth db file
                } else {
                    console.log(err.message);
                    console.log(err.name);
                }
            }
            new sqlite3.Database(rootPath + sqliteConfig.database_file_names['auth'], errCallBackFunction);
            new sqlite3.Database(rootPath + sqliteConfig.database_file_names['test'], errCallBackFunction);
        }
    );
}
