class NetworkManager {
    public static shared: NetworkManager = new NetworkManager();

    public async getAuthors() {
        const response = await fetch('https://poetrydb.org/authors');
        const data = await response.json();
        return data['authors'] ?? [];
    }

    public async getPoemsByAuthor(author: string) {
        const response = await fetch(`https://poetrydb.org/author/${author}`);
        const data = await response.json();
        return data;
    }
}

export default NetworkManager;