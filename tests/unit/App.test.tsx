import App from '@src/App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
    it('Should render', () => {
        render(<App/>)

        expect(screen.getByText('Test')).toBeInTheDocument()
    })
})
