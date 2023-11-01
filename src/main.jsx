import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import UserCrudApp from './components/UserCrudApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserCrudApp />
    </Provider>

  </React.StrictMode>,
)
