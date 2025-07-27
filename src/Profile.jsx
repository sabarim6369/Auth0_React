import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
    </div>
  );
}
