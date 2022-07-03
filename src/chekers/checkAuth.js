


const checkAuth = () => {
  const isAuth = JSON.parse(localStorage.getItem('refreshToken')) || false
  return isAuth
}
export default checkAuth