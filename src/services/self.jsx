export const logout = () => {
    localStorage.clear()
    if ( window.location.pathname !== '/login' ) window.location = '/login'
}
