import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { listData } from "../../data/data";
import "./List.scss";

const data = listData;

function List() {
  return (
    <div className="list-page">
      <section className="list">
        <div className="wrapper">
          <Filter />

          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="map"></section>
    </div>
  );
}

export default List;
