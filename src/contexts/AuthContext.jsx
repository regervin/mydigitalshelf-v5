import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if we're in mock mode
  const isMockMode = !supabase

  useEffect(() => {
    if (isMockMode) {
      // Load mock user from localStorage
      const mockUser = localStorage.getItem('mockUser')
      if (mockUser) {
        try {
          const parsedUser = JSON.parse(mockUser)
          setUser(parsedUser)
        } catch (error) {
          console.error('Error parsing stored user:', error)
          localStorage.removeItem('mockUser')
        }
      }
      setLoading(false)
      return
    }

    // Real Supabase implementation
    const initializeAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.error('Error getting session:', error)
        } else {
          setUser(session?.user ?? null)
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email)
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription?.unsubscribe()
  }, [isMockMode])

  const signUp = async (email, password, userData = {}) => {
    if (isMockMode) {
      // Mock implementation
      const mockUser = {
        id: 'mock-user-' + Date.now(),
        email,
        user_metadata: userData,
        created_at: new Date().toISOString()
      }
      setUser(mockUser)
      localStorage.setItem('mockUser', JSON.stringify(mockUser))
      return { data: { user: mockUser }, error: null }
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      })
      if (data?.user && !error) {
        setUser(data.user)
      }
      return { data, error }
    } catch (error) {
      console.error('Sign up error:', error)
      return { data: null, error }
    }
  }

  const signIn = async (email, password) => {
    if (isMockMode) {
      // Check for existing mock user or create one
      const existingUser = localStorage.getItem('mockUser')
      if (existingUser) {
        try {
          const mockUser = JSON.parse(existingUser)
          setUser(mockUser)
          return { data: { user: mockUser }, error: null }
        } catch (error) {
          localStorage.removeItem('mockUser')
        }
      }
      
      // Create new mock user
      const mockUser = {
        id: 'mock-user-' + Date.now(),
        email,
        user_metadata: {
          first_name: email.split('@')[0],
          last_name: 'User'
        },
        created_at: new Date().toISOString()
      }
      setUser(mockUser)
      localStorage.setItem('mockUser', JSON.stringify(mockUser))
      return { data: { user: mockUser }, error: null }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (data?.user && !error) {
        setUser(data.user)
      }
      return { data, error }
    } catch (error) {
      console.error('Sign in error:', error)
      return { data: null, error }
    }
  }

  const signOut = async () => {
    if (isMockMode) {
      setUser(null)
      localStorage.removeItem('mockUser')
      return { error: null }
    }

    try {
      const { error } = await supabase.auth.signOut()
      if (!error) {
        setUser(null)
      }
      return { error }
    } catch (error) {
      console.error('Sign out error:', error)
      return { error }
    }
  }

  const updateProfile = async (updates) => {
    if (isMockMode) {
      const updatedUser = {
        ...user,
        user_metadata: {
          ...user.user_metadata,
          ...updates
        }
      }
      setUser(updatedUser)
      localStorage.setItem('mockUser', JSON.stringify(updatedUser))
      return { data: { user: updatedUser }, error: null }
    }

    try {
      const { data, error } = await supabase.auth.updateUser({
        data: updates
      })
      if (data?.user && !error) {
        setUser(data.user)
      }
      return { data, error }
    } catch (error) {
      console.error('Update profile error:', error)
      return { data: null, error }
    }
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
