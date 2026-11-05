
import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { loginUser } from '../utils/auth'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(location.state?.message || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const result = loginUser({ email, password })

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate('/', {
      state: { message: `Welcome back, ${result.user.name}!` },
    })
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0c2529] px-5 py-16 text-white">

      {/* Logo */}
      <Link to="/" className="absolute left-5 top-8 z-10 sm:left-8">
        <img
          src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg"
          alt="Elearna Logo"
          className="h-8 w-auto"
        />
      </Link>

      <div className="relative z-10 w-full max-w-[470px]">

        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Log in
          </h1>

          <p className="mt-4 text-sm font-medium sm:text-base">
            More than 50k students have joined Elearna already
          </p>
        </div>

        {/* Form */}
        <div className="rounded-[4px] bg-[#203b40] px-7 py-8 sm:px-10">

          <form onSubmit={handleSubmit}>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-base font-medium">
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[50px] w-full rounded-[4px] bg-[#385157] px-4 text-white outline-none focus:ring-1 focus:ring-[#ffb900]"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="mb-2 block text-base font-medium">
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-[50px] w-full rounded-[4px] bg-[#385157] px-4 text-white outline-none focus:ring-1 focus:ring-[#ffb900]"
              />
            </div>

            {error && (
              <p role="alert" className="mb-4 text-sm text-red-300">
                {error}
              </p>
            )}

            {success && (
              <p role="status" className="mb-4 text-sm text-green-300">
                {success}
              </p>
            )}

            <button
              type="submit"
              className="h-[50px] w-full rounded-[4px] bg-[#ffb900] text-base font-medium text-[#10282c] transition hover:bg-[#e9a800]"
            >
              Log In
            </button>

          </form>

          <div className="mt-6 flex items-center justify-between gap-3 text-sm sm:text-base">
            <span className="font-medium text-white/65">
              Don't have an account?
            </span>

            <Link
              to="/register"
              className="font-semibold transition hover:text-[#ffb900]"
            >
              Sign Up
            </Link>
          </div>

        </div>

        {/* Test Login */}
        <div className="mt-9 text-center">
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-px w-20 bg-white/30" />
            <span className="text-base font-semibold">Test login</span>
            <span className="h-px w-20 bg-white/30" />
          </div>

          <p className="text-sm font-medium leading-7 text-white/65">
            Register your own account to test login.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 hidden w-full items-center justify-between border-t border-white/10 px-5 py-6 text-[11px] font-semibold text-white/80 md:flex lg:px-8">
        <div className="flex gap-6">
          <span>STYLE GUIDE</span>
          <span>404</span>
          <span>LICENSE</span>
        </div>

        <div className="flex gap-6">
          <span>DESIGN BY RADIANT TEMPLATES</span>
          <span>POWERED BY WEBFLOW</span>
        </div>
      </div>

    </section>
  )
}
