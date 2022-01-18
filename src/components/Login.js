

function Login ({setUserName})  {
    return (
        <div>

          <input
          onChange={{(event => {
              setUsername(event.target.value);
          })}}

        </div>
    )
}

export default Login;