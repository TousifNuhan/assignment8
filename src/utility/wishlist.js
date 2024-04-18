const getStoredwishlist = () => {
    const readedBooks = localStorage.getItem('storedWishlists');
    if (readedBooks) {
        return JSON.parse(readedBooks)
    }
    return []
}

const saveWishlist = (id) => {
    const savebook = getStoredwishlist();
    const exists = savebook.find(book => book === id)
    
    if (!exists) {
        
        savebook.push(id)
        localStorage.setItem('storedWishlists', JSON.stringify(savebook))
        return true
    }
}

export {getStoredwishlist,saveWishlist}