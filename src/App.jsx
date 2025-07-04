import React, { useState } from 'react'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import {Routes, Route} from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { getContactList } from './services/contactService'
import { getMessagesByContactId } from './services/messagesService'

function App() {
	
	

	return (
		<div>
			
			<Routes>
				
				<Route
					path='/contacts/:contact_id/messages' /* Configuramos el prametro de busqueda :contact_id */
					element={<HomeScreen/>} 
				/>
				<Route 
					path='/'
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
