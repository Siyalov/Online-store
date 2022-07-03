

const checkAdmin = () => {
  const isAdmin = JSON.parse(localStorage.getItem('is_admin')) || false
  return isAdmin
}
export default checkAdmin