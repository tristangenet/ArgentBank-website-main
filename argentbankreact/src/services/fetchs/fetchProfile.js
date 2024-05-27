export async function fetchProfile(token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (response.ok && response.status === 200) {
      return response.json();
    } else if (response.status === 400) {
      console.error("Invalid Fields");
    } else if (response.status === 500) {
      console.error("Internal Server Error");
    }
  } catch (error) {
    console.error("Unexpected error. Can't access to profile.");
  }
}

export async function fetchEditProfile(userName, token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: `${userName}` }),
    });
    if (response.ok && response.status === 200) {
      return response.json();
    } else if (response.status === 400) {
      console.error("Invalid Fields");
    } else if (response.status === 500) {
      console.error("Internal Server Error");
    }
  } catch (error) {
    console.error("Unexpected error. Can't edit profile.");
  }
}
