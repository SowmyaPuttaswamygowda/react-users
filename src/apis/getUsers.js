const getUsers = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error(`HTTP error status : ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export default getUsers;
