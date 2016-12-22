var $ = require('jquery')

// module.exports = {
 let parse =function(input) {
  console.log("%") 
  $.ajax({
    url: `https://mercury.postlight.com/parser?url=` + input,    
    type: 'GET',
    headers: {"x-api-key": 'x9j7aC1WghE6DX5gkuTBXkrv0B13MBXzlmMvfWoB'}
  }).then((response)=>
  {
  return response 
  }
  )
  }
// }

parse("https://docs.npmjs.com/getting-started/using-a-package.json")