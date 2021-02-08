import SearchIcon from '@material-ui/icons/Search';

const SearchBlock = () => {
    return (
        <section className="searchBar">
            <span><SearchIcon/></span>
            <input type="search" name="search" value="" placeholder="Search Your Passion"/>
        </section>
    );
}

export default SearchBlock;