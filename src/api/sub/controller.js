const {searchSub, serachDetailSub} = require('./query');

exports.searchSub = async (ctxt, next) => {
    let { name } = ctxt.request.body;
    const temp = await searchSub(name); 
    ctxt.response.status = 201;
    ctxt.body = temp;
}

exports.searchDetailSub = async (ctx, next) => {
    let {id} = ctx.request.body;
    const temp = await serachDetailSub(id);
    ctx.response.status = 201;
    ctx.body = temp;
}