import { render, screen } from '@testing-library/react';
import Header from '../Header';

//this is the test block
test('should render same text passed into title prop', async () => {
    //we want to render the App component and test the things inside it
    render(<Header title="Todo"/>);
    //screen is a way to interact with component render
    //to get the specific element we want inside the component we render
    //find by vs get by
    //getby, findby, queryby only allow single match
    
    const headingElement = screen.getByText(/todo/i);
    expect(headingElement).toBeInTheDocument();
});

test('trying other getByRole method', async () => {
    //we want to render the App component and test the things inside it
    render(<Header title="My Header"/>);
    //screen is a way to interact with component render
    //to get the specific element we want inside the component we render
    //find by vs get by
    //getby, findby, queryby only allow single match
    
    const headingElement = screen.getByRole("heading",{name: "My Header"});
    expect(headingElement).toBeInTheDocument();
  });

test('trying other getByTitle method', async () => {
    //we want to render the App component and test the things inside it
    render(<Header title="My Header"/>);
    //screen is a way to interact with component render
    //to get the specific element we want inside the component we render
    //find by vs get by
    //getby, findby, queryby only allow single match

    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
});

test('trying other getByID', async () => {
    //we want to render the App component and test the things inside it
    render(<Header title="My Header"/>);
    //screen is a way to interact with component render
    //to get the specific element we want inside the component we render
    //find by vs get by
    //getby, findby, queryby only allow single match

    const headingElement = screen.getByTestId("header-2")
    expect(headingElement).toBeInTheDocument();
});

////Find by////

test('trying findByText method', async () => {
    //we want to render the App component and test the things inside it
    render(<Header title="Todo"/>);
    //screen is a way to interact with component render
    //to get the specific element we want inside the component we render
    //find by vs get by
    //getby, findby, queryby only allow single match
    
    const headingElement = await screen.findByText(/todo/i);
    expect(headingElement).toBeInTheDocument();
});

//Query by///

test('trying getby method', async () => {
    //we want to render the App component and test the things inside it
    render(<Header title="Todo"/>);
    //screen is a way to interact with component render
    //to get the specific element we want inside the component we render
    //find by vs get by
    //getby, findby, queryby only allow single match
    
    const headingElement = screen.queryByText(/todo/i);
    expect(headingElement).toBeInTheDocument();
});

//getAllBy///

test('trying getAllBy method', async () => {
    //we want to render the App component and test the things inside it
    render(<Header title="Todo"/>);
    //screen is a way to interact with component render
    //to get the specific element we want inside the component we render
    //find by vs get by
    //getby, findby, queryby only allow single match
    
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
});
