export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.email || !body.password || !body.restaurant || !body.day || !body.start_time || !body.ideal_time || !body.end_time || !body.party_size) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Data not complete' })
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.email} ${body.password} ${body.restaurant} ${body.day} ${body.start_time} ${body.ideal_time} ${body.end_time} ${body.party_size}` })
}
