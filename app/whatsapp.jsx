var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
    "token": "x1ywomu32f5t98no",
    "to": "+201060457353",
    "filename": "hello.pdf",
    "document": "https://file-example.s3-accelerate.amazonaws.com/documents/cv.pdf",
    "caption": "document caption"
});

var config = {
  method: 'post',
  url: 'https://api.ultramsg.com/instance95179/messages/document',
  headers: {  
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});