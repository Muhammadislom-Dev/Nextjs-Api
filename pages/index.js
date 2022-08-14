export async function getServerSideProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  const data = await res.json()

  return{
    props: {
      users: data
    }
  }
}


export default function Home({users}) {


  return (
    <div>
      <title> Next API Project</title>
      <div className="container">
        <h2>Hello world</h2>
        {/* {loading ? (
          <p>Loading data...</p>
        ) : (
          <div>
            {users.map((user) => (
              <div key={user.id}>
                <h2>{user.name}</h2>
              </div>
            ))}
          </div>
        )} */}
        {
          users.map((user) => {
            return(
              <div key={user.id}>
                  <h2>{user.name}</h2>
                  <p>{user.username}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
