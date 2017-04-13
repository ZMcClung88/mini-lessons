module.exports = {

  name: function(req, res){

    console.log(req.query);
    if(req.query.name === 'Zac') {
      return res.status(200).send('Hi Zac');
    } else {
      return res.status(401).send('Imposter!')
    }
  }
}
