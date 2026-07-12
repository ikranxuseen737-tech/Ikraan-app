function Dashboard({ isLoggedIn }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default Dashboard;
