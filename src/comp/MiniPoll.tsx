import React from 'react'
import { useState } from 'react'

export default function MiniPoll() {
    const [options,setOptions] = useState([])
    const [votes,setVotes] = useState([])
    const [showResult,setshowResult] = useState(false)
    const [input,setInput] = useState('')
  return (
    <h2>Mini Poll</h2>
  )
}
