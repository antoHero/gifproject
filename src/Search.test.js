import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './components/search/Search';
import '@testing-library/jest-dom/extend-expect';


describe('Search Component', () => {
	it('updates on change', () => {
		
		const setText = jest.fn((value) => {})
		
		const { queryByPlaceholderText } = render(<Search setText={setText}/>)

		const searchTerm = queryByPlaceholderText('Search gifs...')


		fireEvent.change(searchTerm, { target: { value: 'test'} })

		expect(searchTerm.value).toBe('test')

	})
});