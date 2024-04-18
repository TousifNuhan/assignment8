const getStoredBookRead = () => {
    const readedBooks = localStorage.getItem('storedBooks');
    if (readedBooks) {
        return JSON.parse(readedBooks)
    }
    return []
}

const saveBooks = (id) => {
    const savebook = getStoredBookRead();
    const exists = savebook.find(book => book === id)
    
    if (!exists) {
        
        savebook.push(id)
        localStorage.setItem('storedBooks', JSON.stringify(savebook))
        return true
    }
}

export {getStoredBookRead,saveBooks}

