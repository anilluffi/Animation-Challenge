export const API_URL = 'http://localhost:3000/api';

export async function fetchAnimations() {
  const response = await fetch(`${API_URL}/animations`);
  return response.json();
}
