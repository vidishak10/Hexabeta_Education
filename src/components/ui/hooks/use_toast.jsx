"use client"

import { useState } from "react"

export function toast({ title, description, variant = "default", duration = 3000 }) {
  // This is a simplified version of the toast hook
  // In a real application, you would use a proper toast library
  console.log(`Toast: ${title} - ${description}`)

  // In a real implementation, this would show a toast notification
  // For this example, we're just logging to the console

  return {
    id: Date.now(),
    title,
    description,
    variant,
    duration,
  }
}

export function useToast() {
  const [toasts, setToasts] = useState([])

  return {
    toast: (props) => {
      const newToast = toast(props)
      setToasts((prev) => [...prev, newToast])
      return newToast
    },
    toasts,
    dismiss: (id) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    },
  }
}
