const { isNewFeed } = require('../../common/formatter/date');
const { index, store, show, update, qdelete } = require('./query');

exports.index = async (ctx, next) => {
    let { id } = ctx.request.body;
    let feedDate = await this.index(id);
    let result = isNewFeed(`${feedDate}`);
    console.log(`새 글인가요 :  ${result}`);
    ctx.body = query;
}

/** 새 피드 작성 처리 */
exports.store = async (ctx, next) => {
    let body  = ctx.request.body;
    console.log(body)
    let result = await this.store(body.user_id, body.file_id, body.content);
    ctx.body = `피드작성 : ${result}`;    
}

/** 피드 상세 보기 */
exports.show = async (ctx, next) => {
    let { id } = ctx.params.id;
    let user = ctx.request.user;

    let item = await this.show(id);
    // TODO 뭘 짜고 싶언던 거지?
    item['is_me'] = (user.id === item.user_id);
    
    ctx.body = item;
}

/** 피드 수정 */
exports.update = async (ctx, next) => {
    let { file_id, content, id }= ctx.request;
    let result = await this.update(file_id, content, id);
    ctx.body = `피드 수정 : ${result}`;
}

/** 피드 삭제 */
exports.delete = async (ctx, next) => {
    let { id } = ctx.params;
    let result = await this.qdelete(id);
    ctx.body = `${id} 피드 수정`;
}