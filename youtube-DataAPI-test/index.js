var urllib = require('urllib');


function doit(innerUrl)
{
    urllib.request(innerUrl, function (err, data, res) {
        if (err) {
          throw err; // you need to handle error
        }
        console.log(res.statusCode);
        console.log(res.headers);
        // data is Buffer instance
        console.log(data.toString());
      });
}

doit('https://github.sec.samsung.net')
