const LogIn = () => {
    return ( 
    <>
    <h1>login</h1>
    <form style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          padding: 15,
          width: 300,
        }}>
      <label>
          Email
          <input type="text" name="email"   placeholder="enter email"/>
          </label>
   <label>
          Password
          <input type="text" name="email"   placeholder="Password"/>
        </label>
        <button type="submit">
       LogIn
        
        </button>
          <button>
            Register
        
        </button>
    </form>
    </>
  
      )
    
  };
  
  export default LogIn;