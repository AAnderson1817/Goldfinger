module.exports = function(app, db) {
  app.post('/notes', (req,res)=> {
    console.log(req.body);
    //Create note here
    res.send('Hey')
  });
};
