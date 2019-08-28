import * as Express from 'express';
const App: Express.Application = Express();
App.get('/', (req:Express.Request, res:Express.Response) => {
    res.send('itworks');
})
App.listen(2000, () => {
});