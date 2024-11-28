import './FiltersList.scss';
import Filters from '../Filters/Filters';

function FiltersList (props){
    const filterLists = [{  id: 0, name: "Arizona" }, { id: 1, name: "Bridge" }, { id: 2, name: "Buildings" }, { id: 3, name: "California" },
        { id: 4, name:  "Cars" },{ id: 5, name:  "Cathedral" },{ id: 6, name: "Columns" },{ id: 7, name: "Courtyard" },
        { id: 8, name:  "Florida"},  { id: 9, name: "House"},  { id: 10, name: "Illinois"}, { id: 11, name: "Missouri"}, { id: 12, name: "Museum"},{ id: 13, name: "New York"},
        { id: 14, name: "Oregon"}, {  id:15, name:  "Path"},{  id:16, name:  "Skyline"}, {  id: 17, name:  "Subway"}, {  id: 18, name:  "Taxi"},{  id: 19, name:  "Tennessee"}, 
        { id:20, name:   "Texas"},{  id: 21, name:  "Train"},{  id: 22, name: "Trees"},{ id: 23, name:  "Virginia"},{  id: 24, name: "Washington"},
    ];

      console.log("props worked for filterlists ", props);

  return (
     <section className='filters'>

            <h2 className='filters-tag'>Filters</h2>
            <ul className='filter-box'>
           {filterLists.map((item) => (<Filters  key = {item.id} name = {item.name} />
          
        ))} 

          </ul>
      </section>
    )
    
}
 export default FiltersList;

 
