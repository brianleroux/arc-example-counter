let arc = require('@architect/functions')
let url = arc.http.helpers.url

exports.handler = async function http(req) {
  let session = await arc.http.session.read(req)
  return {
    type: 'text/html; charset=utf8',
    body: `<form action=${url('/count')} method=post>
      <button type=submit>1up</button>
    </form>

    <pre>
    ${JSON.stringify(session, null, 2)}
    </pre>
    ` 
  }
}
