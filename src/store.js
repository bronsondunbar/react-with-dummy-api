import React from 'react'

export const Store = React.createContext()

const initialState = {
  posts: [],
  favourites: [],
  selectedTheme: 'default'
}

function reducer(state, action) {
  switch (action.type) {
  	case 'UPDATE_THEME':
      return { ...state, selectedTheme: action.payload }
    case 'FETCH_DATA':
      return { ...state, posts: action.payload }
    default:
      return state;
  }
}

export function StoreProvider(props) {
	const [state, dispatch] = React.useReducer(reducer, initialState)
	const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}
  </Store.Provider>
}