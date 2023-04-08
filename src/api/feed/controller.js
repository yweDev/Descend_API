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
    // let {user_id, title, content} = ctx.request.body;
    // let item = await store(user_id, title, content)
    let {user_id, sub_id, title, content} = ctx.request.body;
    console.log(`sss`,sub_id);
    let item = await store(user_id, sub_id, title, content);
    ctx.body = item;
}

/** 피드 상세 보기 */
exports.show = async (ctx, next) => {
    let { id } = ctx.params;
    // let user = ctx.request.user;

    let item = await show(id);
    ctx.body = item;
}

/** 피드 수정 */
exports.update = async (ctx, next) => {
    let { title, content, id }= ctx.request.body;
    let result = await update(title, content, id);
    console.log(result.length);
    if (result.length) {
        ctx.response.status = 201;
        console.log(`Feed Api: 1`);
    } else if (result.length === 0) {
        ctx.response.status = 400;
        console.log(`Feed Api: 2`);
    } else {
        ctx.response.status = 500;
        console.log(`Feed API : Unknown Error`);
    }
    // ctx.body = `피드 수정 : ${result}`;
}

/** 피드 삭제 */
exports.delete = async (ctx, next) => {
    let { id } = ctx.params;
    let result = await qdelete(id);
    ctx.body = `${id} 피드 수정`;
}