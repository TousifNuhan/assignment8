import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { getStoredBookRead } from "../../utility/localstorage";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Pages = () => {


    const loadData2 = useLoaderData();

    const [readedBooks, setReadedBooks] = useState([])

    useEffect(() => {
        const storedJobIds = getStoredBookRead()
        if (loadData2.length) {
            const booksReaded = []
            for (const id of storedJobIds) {
                const book = loadData2.find(book => book.bookId === id)
                if (book) {
                    booksReaded.push(book)
                }
            }
            setReadedBooks(booksReaded)
            // setDisplayReadBooks(booksReaded)
        }

    }, [loadData2])

    const graph = readedBooks;

    console.log(graph)

    return (
        <div className='flex items-center h-screen'>
            {/* {
                readedBooks.map(book=> <PagesItem key={book.bookId} book={book}></PagesItem>)
            } */}

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={graph}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis dataKey="totalPages"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" stackId="a" fill="#8884d8" />
                    <Bar dataKey="totalPages" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="totalPages" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>

        </div>

    );
};

export default Pages;
