// SearchUserByUID.jsx
import React, { useState } from 'react'
import { supabase } from '../../database/supabase'

const SearchUserByUID = () => {
  const [uid, setUid] = useState('')

  const handleSearch = async () => {
    if (!uid) {
      console.log('Please enter a UID.')
      return
    }

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', uid)
      .single()

    if (error) {
      console.error('Error fetching user:', error.message)
    } else {
      console.log('User details:', data)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
        placeholder="Enter UID"
        style={{ marginRight: '10px', padding: '5px' }}
        className='border-2 z-100'
      />
      <button onClick={handleSearch}>Search User</button>
    </div>
  )
}

export default SearchUserByUID
