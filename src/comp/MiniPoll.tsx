import React from 'react'
import { useState } from 'react'

export default function MiniPoll() {
    const [options,setOptions] = useState('default')
    const [votes,setVotes] = useState(0)
    const [result,setResult] = useState(false)
    const [input,setInput] = useState('')
  return (
    <h2>Mini Poll</h2>
  )
}
