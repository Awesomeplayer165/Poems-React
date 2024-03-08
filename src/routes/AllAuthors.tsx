import React from "react";
import NetworkManager from "../NetworkManager";
import { Autocomplete, Button, LinearProgress, TextField } from "@mui/material";
import { Link } from "react-router-dom";


interface AuthorsState {
    authors: string[];
    loading: boolean;
    searchTerm: string;
    error: any;
}

class Authors extends React.Component<{}, AuthorsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            authors: [],
            loading: true,
            searchTerm: '',
            error: null
        }
    }

    async componentDidMount() {
        try {
            const authors = await NetworkManager.shared.getAuthors();
            this.setState({ authors, loading: false });
        } catch (error) {
            this.setState({ error, loading: false });
        }
    }

    selectAuthor() {
        const { authors } = this.state;
        console.log(authors);
    }

    render() {
        const { authors, loading, searchTerm, error } = this.state;
        return (
            <>
                {loading && <LinearProgress />}
                {error && <p>Error: {error.message}</p>}
                <ul>
                    {authors.map(author => (
                        <li>
                            <Link to={`/author/${author}`}>{author}</Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Authors;