
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../utils/auth'

export default function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!agree) {
      setError('Please accept the privacy policy and terms of service.')
      return
    }

    if (password.length < 6) {
      setError('Password must contain at least 6 characters.')
      return
    }

    const result = registerUser({ name, email, password })

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate('/login', {
      state: { message: 'Account created successfully! Please log in.' },
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
            Sign Up
          </h1>

          <p className="mt-4 text-sm font-medium sm:text-base">
            More than 50k students join with us!
          </p>
        </div>

        {/* Register Form */}
        <div className="rounded-[4px] bg-[#203b40] px-7 py-8 sm:px-10">

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="register-email" className="mb-2 block text-base font-medium">
                Email address
              </label>

              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[50px] w-full rounded-[4px] bg-[#385157] px-4 text-white outline-none focus:ring-1 focus:ring-[#ffb900]"
              />
            </div>

            {/* Name */}
            <div className="mb-5">
              <label htmlFor="register-name" className="mb-2 block text-base font-medium">
                Name
              </label>

              <input
                id="register-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-[50px] w-full rounded-[4px] bg-[#385157] px-4 text-white outline-none focus:ring-1 focus:ring-[#ffb900]"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label htmlFor="register-password" className="mb-2 block text-base font-medium">
                Password
              </label>

              <input
                id="register-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="h-[50px] w-full rounded-[4px] bg-[#385157] px-4 text-white outline-none focus:ring-1 focus:ring-[#ffb900]"
              />
            </div>

            {/* Terms Checkbox */}
            <label className="mb-3 flex cursor-pointer items-start gap-3 text-sm leading-6 text-white/60">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 accent-[#ffb900]"
              />

              <span>
                By creating an account, I agree to this website's{' '}
                <span className="font-semibold text-white">
                  privacy policy and terms of service
                </span>
              </span>
            </label>

            {/* Marketing Checkbox */}
            <label className="mb-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-white/60">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 accent-[#ffb900]"
              />

              <span>
                I consent to receive marketing emails.
              </span>
            </label>

            {error && (
              <p role="alert" className="mb-4 text-sm text-red-300">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="h-[50px] w-full rounded-[4px] bg-[#ffb900] text-base font-medium text-[#10282c] transition hover:bg-[#e9a800]"
            >
              Sign Up
            </button>

          </form>

          {/* Login Link */}
          <div className="mt-6 flex items-center justify-between gap-3 text-sm sm:text-base">
            <span className="font-medium text-white/65">
              Already have an account?
            </span>

            <Link
              to="/login"
              className="font-semibold transition hover:text-[#ffb900]"
            >
              Log In
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 hidden w-full items-center justify-between border-t border-white/10 px-5 py-6 text-[11px] font-semibold text-white/80 md:flex lg:px-8">
        <div className="flex gap-6">
          <span>404 ERROR</span>
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
