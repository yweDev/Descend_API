/// feed query
// store show update delete
// insert select update delete
const { pool } = require('../../data/index');
/**
 * 과목이름을 토대로 검색하는 함수
 * @param subname 부분 과목 명
 * @returns {Promise<unknown>}
 */
exports.searchSub = async (subname) => {
    const query = "SELECT  Distinct subname, professor FROM subject WHERE subject.subname LIKE ?; "
    const temp = `%` + subname.toString() + `%`;
    console.log(temp);

    return await pool(query, [temp])
}

exports.serachDetailSub = async (subname) => {
    const query = "SELECT * FROM subject WHERE subject.subname LIKE ?; "
    const temp = `%` + subname.toString() + `%`;
    console.log(temp);

    return await pool(query, [temp])
}