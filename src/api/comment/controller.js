// 댓글

const { isNewComment } = require('../../common/formatter/date');
const { index, store, show, update, qdelete } = require('./query');

exports.index = async (ctx, next) => {
    let { id } = ctx.request.body;
    let CommentDate = await index(id);
    let result = isNewComment(`${CommentDate}`);
    console.log(`새 댓글인가요 :  ${result}`);
    ctx.body = query;
}

/** 새 댓글 작성 처리 */
exports.store = async (ctx, next) => {
    let { user_id, content, feed_id } = ctx.request.body;
    let item = await store(user_id, content, feed_id);
    ctx.body = item;
}

/** 댓글 상세 보기 */
exports.show = async (ctx, next) => {
    let { feed_id } = ctx.params;
    let item = await show(feed_id);
    ctx.body = item;
}

/** 댓글 수정 */
exports.update = async (ctx, next) => {
    let { content, id }= ctx.request.body;
    let result = await update(content, id);
    ctx.body = `댓글 수정 : ${result}`;
}

/** 댓글 삭제 */
exports.delete = async (ctx, next) => {
    let { id } = ctx.params;
    let result = await qdelete(id);
    ctx.body = `${id} 댓글 수정`;
}