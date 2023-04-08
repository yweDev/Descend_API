/// comment query
// store show update delete
// insert select update delete
const { pool } = require('../../data/index');

exports.index = async (id) => {
    const query = `SELECT created_at FROM comment WHERE id=?`
    return await pool(query, [id]);
}

exports.store =  async (user_id, content, feed_id) => {
    const query = `INSERT INTO comment (user_id, content, feed_id) VALUES (?, ?, ?)`;

    return await pool(query, [user_id, content, feed_id]);
}

exports.show =  async (feed_id) => {
    const query = `SELECT * FROM comment WHERE feed_id = ?`

    return await pool(query, [feed_id]);
}

exports.update =  async (content, id) => {
    const query = `
        UPDATE comment 
        SET content = ?
        WHERE id = ?
        `;
    return await pool(query, [content, id]);
}

exports.qdelete =  async (id) => {
    const query = `DELETE FROM comment WHERE id = ?`
    return await pool(query, [id]);
}