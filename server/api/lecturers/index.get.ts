import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./server/db/records.db');

export default defineEventHandler((event) => {
    const lecturers = new Promise((resolve, reject) => {
        db.all(`
            SELECT
                lecturers.*,
                json_group_array(DISTINCT emails.email) AS emails,
                json_group_array(DISTINCT telephone_numbers.number) AS telephone_numbers,
                json_group_array(DISTINCT json_object('uuid', tags.uuid, 'name', tags.name)) AS tags
            FROM
                lecturers
            JOIN
                contact ON lecturers.uuid = contact.lecturer_uuid
            LEFT JOIN
                emails ON contact.lecturer_uuid = emails.contact_uuid
            LEFT JOIN
                telephone_numbers ON contact.lecturer_uuid = telephone_numbers.contact_uuid
            LEFT JOIN
                lecturers_tags ON lecturers.uuid = lecturers_tags.lecturer_uuid
            LEFT JOIN
                tags ON lecturers_tags.tag_uuid = tags.uuid
            GROUP BY lecturers.uuid
        `, (err, rows) => {
            console.log(rows)
            rows.forEach((el: any) => {
                // json_group_array in sqlite returns array in string, this parses it back to json:
                el.emails = JSON.parse(el.emails);
                el.telephone_numbers = JSON.parse(el.telephone_numbers);
                el.tags = JSON.parse(el.tags);
                el.contact = {
                    "emails": el.emails,
                    "telephone_numbers": el.telephone_numbers
                }
                delete el.emails;
                delete el.telephone_numbers;
                //small formatting
                Object.keys(el).forEach(key => {
                    if (el[key] == 'null') el[key] = null;
                    if (el[key] == 'undefined') el[key] = null;
                })
            })
            resolve(rows);
        })
    })

    return lecturers;
})