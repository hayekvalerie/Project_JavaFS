import react from 'react';
import Search from"./components/Search";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            query:'',
            results:{},
            loading:false,
            message:''
        }
    }


    render(){
        return(
            <div className="container">
               <h2 className="heading">Live Search</h2>
                <label className="search-label" htmlFor="search-imput">
                    <input
                    type="text"
                    value=""
                    id="search-input"
                    placeholder="Search..."

                />
                </label>
            
            </div>
        )
    }
}


export default Search