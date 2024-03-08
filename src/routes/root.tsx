import Authors from "./AllAuthors";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Poetry Database</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
            </form>
            <form method="post">
              <button type="submit">Random</button>
            </form>
          </div>
          <nav>
            <Authors />
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }