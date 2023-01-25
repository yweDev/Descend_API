const { isNewFeed } = require('../../common/formatter/date');
const { index, store, show, update, qdelete } = require('./query');

exports.index = async (ctx, next) => {
    let { id } = ctx.request.body;
    let feedDate = await index(id);
    let result = isNewFeed(`${feedDate}`);
    console.log(`새 글인가요 :  ${result}`);
    ctx.body = query;
}

/** 새 피드 작성 처리 */
exports.store = async (ctx, next) => {
    let {user_id, file_id, content} = ctx.request.body;
    let item = await store(user_id, file_id, content)
    ctx.body = item;
}

/** 피드 상세 보기 */
exports.show = async (ctx, next) => {
    let { id } = ctx.params;
    // let user = ctx.request.user;

    let item = await show(id);
    console.log(`Feed Show :`, item);
    console.log(`Feed Show :`, item[0]);
    ctx.body = item;
}

/** 피드 수정 */
exports.update = async (ctx, next) => {
    let { file_id, content, id }= ctx.request.body;
    let result = await update(file_id, content, id);
    ctx.body = `피드 수정 : ${result}`;
}

/** 피드 삭제 */
exports.delete = async (ctx, next) => {
    let { id } = ctx.params;
    let result = await qdelete(id);
    ctx.body = `${id} 피드 수정`;
}