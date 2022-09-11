import React from 'react'
import { SearchBox } from './SearchBox'
import { Sidebar } from './Sidebar'

export const InboxPeople = () => {
	return (
		<div className="bg-gray-50 float-left overflow-hidden w-[35%] border-r border-gray-300">
			<SearchBox />
			<Sidebar />
		</div>
	)
}
