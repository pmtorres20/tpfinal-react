import React, { useState } from 'react'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import {Routes, Route} from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { getContactList } from './services/contactService'
import { getMessagesByContactId } from './services/messagesService'
import { AuthProvider, useAuth } from './Context/AuthContext'
import LoginScreen from './Screens/LoginScreen/LoginScreen'

function App() {
	
	

	return (
			<div>
				<Routes>
					<Route
						path='/' /* Configuramos la ruta de login */
						element={<LoginScreen />} /* Renderizamos el componente LoginScreen */
						/>
					<Route
						path='/contacts/:contact_id/messages' /* Configuramos el prametro de busqueda :contact_id */
						element={<HomeScreen/>} 
					/>
					<Route 
						path='/contacts'
						element={<ContactScreen/>}
					/>
					<Route
						path='/contact-detail'
						element={<ContactDetailScreen/>}
					/>
				</Routes>
			</div>
	)
}

export default App
