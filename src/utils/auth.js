
const USERS_KEY = 'ele arna_users'.replace(' ', '')
const SESSION_KEY = 'ele arna_current_user'.replace(' ', '')

export function registerUser({ name, email, password, marketing }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')

  const normalizedEmail = email.trim().toLowerCase()

  if (users.find(user => user.email === normalizedEmail)) {
    return {
      success: false,
      message: 'An account with this email already exists.',
    }
  }

  const newUser = {
    id: Date.now(),
    name: name.trim(),
    email: normalizedEmail,
    password,
    marketing,
  }

  users.push(newUser)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))

  return {
    success: true,
    message: 'Account created successfully.',
  }
}

export function loginUser({ email, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')

  const user = users.find(
    user =>
      user.email === email.trim().toLowerCase() &&
      user.password === password
  )

  if (!user) {
    return {
      success: false,
      message: 'Incorrect email or password.',
    }
  }

  const { password: savedPassword, ...safeUser } = user

  localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))

  return {
    success: true,
    user: safeUser,
  }
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY)
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
}
