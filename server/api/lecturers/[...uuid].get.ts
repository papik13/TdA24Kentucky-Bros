import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./server/db/records.db');

export default defineEventHandler((event) => {
    const lecturers = new Promise((resolve, reject) => {
        const uuid = event.context.params?.uuid;
        db.get(`
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
            WHERE
                lecturers.uuid = "${uuid}"
            GROUP BY lecturers.uuid
        `, (err, row: any) => {
            if (err) {
                setResponseStatus(event, 500);
                resolve({ code: 500, message: err });
            }
            if (row == undefined) {
                setResponseStatus(event, 404);
                resolve({ code: 404, message: 'User not found' });
            }
            // json_group_array in sqlite returns array in string, this parses it back to json:
            row.emails = JSON.parse(row.emails);
            row.telephone_numbers = JSON.parse(row.telephone_numbers);
            row.tags = JSON.parse(row.tags);
            row.contact = {
                "emails": row.emails,
                "telephone_numbers": row.telephone_numbers
            }
            delete row.emails;
            delete row.telephone_numbers;
            //small formatting
            Object.keys(row).forEach(key => {
                if (row[key] == 'null') row[key] = null;
                if (row[key] == 'undefined') row[key] = null;
            })

            //get rid of {uuid: null, name: null} in tags
            if (row.tags[0].name == null && row.tags.length == 1) row.tags = [];

            resolve(row);
        })
    })

    return lecturers;
})