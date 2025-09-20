'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import { Slide } from 'react-toastify';

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = async () => {
    try {
      const res = await fetch("/api/genrate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, shorturl }),
      })

      const result = await res.json()
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
      setUrl("")
      setShorturl("")
      toast.info(`${result.message}`, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <div className="mx-auto max-w-lg bg-teal-100 my-16 p-8 rounded-lg">
        <h1 className="font-bold text-lg">Generate Your Short URLs</h1>
        <div className="flex flex-col my-4 gap-5">
          <input
            className="p-4 focus:outline-teal-600 rounded-full"
            value={url}
            type="text"
            placeholder="Enter your URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            className="p-4 focus:outline-teal-600 rounded-full"
            value={shorturl}
            type="text"
            placeholder="Enter Preferred URL"
            onChange={(e) => setShorturl(e.target.value)}
          />
          <button
            onClick={generate}
            className="cursor-pointer my-3 bg-teal-400 text-white rounded-lg shadow-lg px-3 py-2 font-bold"
          >
            Generate
          </button>
          {generated && <><span className='font-bold text-lg '>Your Link Is:</span> <code><Link target="_blank" href={generated}>{generated}</Link>
          </code></>
          }
        </div>
      </div></>
  )
}

export default Shorten
