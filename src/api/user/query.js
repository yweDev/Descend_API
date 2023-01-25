const {pool} = require('../../data')
/**
 * 회원 가입
 * @param {string} email 메일(아이디)
 * @param {string} password 비밀번호
 * @param {string} name 이름
 * @returns
 */

exports.register = async (email, password, name) => {
    const query = `INSERT INTO user
    (email, password, name)
    VALUES (?,?,?)`;
    return await pool(query, [email, password, name]);
}

/**
 * 로그인
 * @param {string} email 메일(아이디)
 * @param {string} password 비밀번호
 * @returns
 */
exports.login = async (email, password) => {
    const query = `SELECT * FROM user WHERE
    email = ? AND password = ?`;
    let result = await pool(query, [email, password]);
    return (result.length <0) ? null : result[0];
}

exports.checkDuplicate = async (email) => {
    const query = `SELECT * FROM user WHERE email = ?`;
    let result = await pool(query, [email]);
    /**
     * 1 은 중복 있음
     * 0 은 중복 없음
     * -1 은 에러
     */
    if (result.length) {
        return 1;
    } else if (result.length == 0) {
        return 0;
    } else {
        return -1;
    }
    // return (result.length == 0) ? 1 : 0;
}