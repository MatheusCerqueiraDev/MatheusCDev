import Head from 'next/head'
import { FormEvent, useState } from 'react'
import api from '../../services/api'
import styles from './style.module.scss'

export default function Contact() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [projectIdeia, setProjectIdeia] = useState('')
  const [description, setDescription] = useState('')

  function handleSendEmail(e: FormEvent) {
    e.preventDefault()
    window.alert(projectIdeia)
    api
      .post('/', {
        name: name,
        surname: surname,
        email: email,
        subject: subject,
        ideia: projectIdeia,
        description: description,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <>
      <Head>
        <title>MCQ - Contact</title>
      </Head>

      <main className={styles.bodyContainer}>
        <div className={styles.bodyContent}>
          <section className={styles.title}>
            <h1>
              <span>C</span>ontact
            </h1>
          </section>
          <section className={styles.formContainer}>
            <form onSubmit={handleSendEmail}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => [setName(e.target.value)]}
              />
              <label>Surname</label>
              <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => [setSurname(e.target.value)]}
              />
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => [setEmail(e.target.value)]}
              />
              <label>Subject</label>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => [setSubject(e.target.value)]}
              />
              <div>
                <label>
                  <input
                    type="radio"
                    name="ideia"
                    value="Have a project"
                    onChange={(e) => [setProjectIdeia(e.target.value)]}
                  />
                  I have a project
                </label>
                <label>
                  <input
                    type="radio"
                    name="projectIdea"
                    value="Don't have a project"
                    onChange={(e) => [setProjectIdeia(e.target.value)]}
                  />
                  I have a ideia but not a project
                </label>
              </div>
              <br />
              <label>Description</label>
              <textarea
                className="description"
                placeholder="Explain about your ideia "
                value={description}
                onChange={(e) => [setDescription(e.target.value)]}
              />
              <input type="submit" value="Send" className="button" />
              <h6>*In this form some functionalities are under development.</h6>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}
