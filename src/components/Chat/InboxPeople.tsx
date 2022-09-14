import React from 'react'
import { SearchBox } from './SearchBox'
import { Sidebar } from './Sidebar'

export const InboxPeople = () => {
	return (
		<div className="
			bg-gray-50 0 float-left overflow-hidden w-[35%] border-r border-gray-300
			dark:bg-gray-900 dark:border-gray-700"
		>
			<SearchBox />
			<Sidebar />
		</div>
	)
}
