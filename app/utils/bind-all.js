export default (ctx, ...methods) => {
    methods.forEach( (method) => {
        ctx[method] = ctx[method].bind(ctx);
    });
};
