import { jwtDecode } from 'jwt-decode';

export default function isTokenValid(): boolean {
  const token = localStorage.getItem('authToken');
  if (!token) return false;

  try {
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // still valid
  } catch (e) {
    console.log(e);
    return false;
  }
}


