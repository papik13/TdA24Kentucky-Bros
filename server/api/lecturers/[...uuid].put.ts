import { v4 as uuidv4 } from 'uuid';
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./server/db/records.db');

export default defineEventHandler((event) => {
    const res = new Promise(async (resolve, reject) => {
        await readBody(event)
            .then(body => {

                const uuid = event.context.params?.uuid;

                db.get(`SELECT * FROM lecturers WHERE uuid = "${uuid}"`, (err, row: any) => {
                    if (!row) {
                        setResponseStatus(event, 404);
                        resolve({ code: 404, message: 'User not found' })
                    } else {
                        console.log(body)
                        Object.keys(row).forEach(key => {
                            if (!body.hasOwnProperty(key)) body[key] = row[key];
                        });
                        console.log(body)
                        db.run(`
                            UPDATE lecturers
                            SET
                                title_before = "${body.title_before}",
                                first_name = "${body.first_name}",
                                middle_name = "${body.middle_name}",
                                last_name = "${body.last_name}",
                                title_after = "${body.title_after}",
                                picture_url = "${body.picture_url}",
                                location = "${body.location}",
                                claim = "${body.claim}",
                                bio = "${body.bio}",
                                price_per_hour = "${body.price_per_hour}"
                            WHERE uuid = "${uuid}"
                        `, (err => {
                            if (err) {
                                setResponseStatus(event, 500);
                                resolve({ code: 500, message: err });
                            } else {
                                db.all(`
                                SELECT tags.*
                                FROM tags
                                JOIN lecturers_tags ON tags.uuid = lecturers_tags.tag_uuid
                                WHERE lecturers_tags.lecturer_uuid = "${uuid}"
                                `, (err: any, oldTags: any) => {
                                    if (err) {
                                        setResponseStatus(event, 500);
                                        resolve({ code: 500, message: err });
                                    } else {
                                        //removing tags
                                        if (oldTags) oldTags.forEach((el: any) => {
                                            if (body.tags && !body.tags.find((newTag: any) => newTag.name == el.name)) {
                                                db.run(`DELETE FROM lecturers_tags WHERE tag_uuid = "${el.uuid}"`);
                                            }
                                        })
                                        //adding tags
                                        if (body.tags) body.tags.forEach(async (newTag: any) => {
                                            if (!oldTags.find((oldTag: any) => oldTag.name == newTag.name)) {
                                                //get old tag if exists
                                                const oldTag: any = await new Promise((resolve, reject) => {
                                                    db.get(`SELECT * FROM tags WHERE name = "${newTag.name}"`, (err, row) => {
                                                        resolve(row);
                                                    })
                                                })

                                                //if old tag does not exist, create new one
                                                if (oldTag == undefined) {
                                                    newTag.uuid = uuidv4();
                                                    await new Promise<void>((resolve, reject) => {
                                                        db.run(`INSERT INTO tags(uuid, name) VALUES("${newTag.uuid}", "${newTag.name}")`, (err) => {
                                                            resolve();
                                                        })
                                                    })
                                                } else {
                                                    newTag.uuid = oldTag.uuid;
                                                }

                                                //insert into junction table
                                                await new Promise<void>((resolve, reject) => {
                                                    db.run(`INSERT INTO lecturers_tags(tag_uuid, lecturer_uuid) VALUES("${newTag.uuid}", "${uuid}")`, (err) => {
                                                        resolve();
                                                    })
                                                })

                                                resolve(body)
                                            }
                                        })
                                    }
                                })
                            }
                        }))
                    }
                })

            })
    })
    return res;
})