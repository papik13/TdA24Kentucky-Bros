import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./server/db/records.db');

export default defineEventHandler(async (event) => {
    const res = new Promise((resolve, reject) => {
        const uuid = event.context.params?.uuid;

        db.all(`SELECT * FROM lecturers WHERE uuid = "${uuid}"`, (err, rows: any) => {
            if (rows.length == 0) {
                setResponseHeader(event, 'Content-Type', 'application/json');
                setResponseStatus(event, 404)
                resolve({
                    code: 404,
                    message: 'User not found'
                })
            } else {
                db.run(`DELETE FROM lecturers WHERE uuid = "${uuid}"`, (err) => {
                    if (!err) {
                        setResponseStatus(event, 204);
                        resolve({});
                    }
                })
            }
        })
    })
    return res;
})