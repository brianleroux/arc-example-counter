let arc = require('@architect/functions')
let url = arc.http.helpers.url

exports.handler = async function http(req) {
  let session = await arc.http.session.read(req)
  session.count = (session.count || 0) + 1
  let cookie = await arc.http.session.write(session)
  return {
    cookie,
    status: 302, 
    location: url('/'),
  }
}

