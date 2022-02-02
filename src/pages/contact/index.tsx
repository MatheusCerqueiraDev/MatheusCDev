import Head from 'next/head'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { CgMail } from 'react-icons/cg'
import { GrInstagram } from 'react-icons/gr'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import api from '../../services/api'
import style from './style.module.scss'

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
        <title>Contact - MatheusCDev</title>
      </Head>
      <main className={style.bodyContainer}>
        <div className={style.bodyContent}>
          <h1>
            <span>C</span>ontact
          </h1>

          <form onSubmit={handleSendEmail}>
            <div className={style.formContainer}>
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
                  I have a project
                  <input
                    type="radio"
                    name="ideia"
                    value="Have a project"
                    onChange={(e) => [setProjectIdeia(e.target.value)]}
                  />
                </label>
                <label>
                  I have a ideia but not a project
                  <input
                    type="radio"
                    name="projectIdea"
                    value="Don't have a project"
                    onChange={(e) => [setProjectIdeia(e.target.value)]}
                  />
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
            </div>
          </form>
          <div className={style.linkContainer}>
            <Link href="/">
              <a>
                <CgMail size={20} className="noHover" />
                matheuscerqueira12@gmail.com
              </a>
            </Link>
            <Link href="/">
              <a>
                <IoLogoLinkedin size={20} className="noHover" />
                Matheus de Carvalho Cerqueira
              </a>
            </Link>
            <Link href="/">
              <a>
                <IoLogoGithub size={20} className="noHover" />
                MatheusCerqueiraDev
              </a>
            </Link>

            <Link href="/">
              <a>
                <GrInstagram size={20} className="noHover" />
                m_cerqueira_
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
