class Utils {

    isAuthenticated = () => {
      const userProfile = localStorage.getItem('user');

    if(userProfile) {
      return true;
    }

    return false;
    }

   userProfile = () => {
    const userProfile = localStorage.getItem('user');

    return JSON.parse(userProfile);
   }

   getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}

export default Utils;
