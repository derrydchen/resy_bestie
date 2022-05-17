import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      restaurant: event.target.restaurant.value,
      day: event.target.day.value,
      start_time: event.target.start_time.value,
      ideal_time: event.target.ideal_time.value,
      end_time: event.target.end_time.value,
      party_size: event.target.party_size.value,
    }

    const JSONdata = JSON.stringify(data)

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSONdata,

      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your data: ${result.data}`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Resy Bestie</title>
        <meta name="description" content="i just want a resy, man" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          welcome to resy besty
        </h1>

        <p className={styles.description}>
          never again camp out at 12am for some Carbone
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="restaurant">restaurants [input as array]</label>
          <input type="text" id="restaurant" name="restaurant" required />

          <label htmlFor="day">day</label>
          <input type="date" id="day" name="day" required />

          <label htmlFor="start_time">start time</label>
          <input type="time" id="start_time" name="start_time" step="30" required />

          <label htmlFor="ideal_time">ideal time</label>
          <input type="time" id="ideal_time" name="ideal_time" step="30" required />

          <label htmlFor="end_time">end time</label>
          <input type="time" id="end_time" name="end_time" step="30" required />

          <label htmlFor="party_size">party size</label>
          <input type="number" id="party_size" name="party_size" required />


          <button type="submit">start scan</button>
        </form>


      </main>

      <footer className={styles.footer}>
        <p className={styles.normal_text}>
          created with heinous intentions: zack & derry
        </p>
      </footer>

    </div>
  )
}
