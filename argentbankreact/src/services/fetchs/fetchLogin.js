export async function fetchLogin(email, password) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok && response.status === 200) {
      return response.json();
    } else if (response.status === 400) {
      console.error("Invalid Fields");
    } else if (response.status === 500) {
      console.error("Internal Server Error");
    }
  } catch (error) {
    console.error("Une erreur est survenue. Impossible de se connecter");
  }
}
