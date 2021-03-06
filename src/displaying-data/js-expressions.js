// Attribute expressions

// Input (JSX):
var person = <Person name={window.isLoggedIn ? window.name : ''}/>;
// Output (JS):
var person = React.createElement(
  Person,
  {name: window.isLoggedIn ? window.name : ''}
);

// Boolean Expressions

// Omitting the value of an attribute causes JSX to treat it as true. To pass false an attribute expression must be used.

// These two are equivalent in JSX for disabling a button
<input type="button" disabled/>;
<input type="button" disabled={true}/>;

// And these two are equivalent in JSX for not disabling a button
<input type="button"/>;
<input type="button" disabled={false}/>;

// Child Expressions

// Input (JSX):
var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;
// Output (JS):
var content = React.createElement(
  Container,
  null,
  window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login)
);

// JSX comments

var content = (
  <Nav>
    {/* child comment, put {} around */}
    <Person
      /* multi
         line
         comment */
      name={window.isLoggedIn ? window.name : ''} // end of line comment
    />
  </Nav>
);
