import Searchbar from '../../components/Searchbar/Searchbar'

const Movies =() => {

    const [searchQuery, setSearchQuery] =useState('')
  const [imgData, setImgData] =useState([''])
  const [page, setPage] =useState(1)
  const [status, setStatus] =useState(STATUS.idle)
  const [totalFind, setTotalFind] = useState(0);
  const [totalHits, setTotalHits] = useState(0);

    const onSubmit = value => {
        setSearchQuery(value);
        setPage(1);
        setImgData([]);
        setTotalFind(0);
        console.log(searchQuery)
    }

return (
    <Searchbar onSubmit={onSubmit}/>
)
}

export default Movies 