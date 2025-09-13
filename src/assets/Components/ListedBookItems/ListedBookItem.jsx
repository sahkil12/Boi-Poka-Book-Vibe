const ListedBookItem = () => {
  return (
    <div>
      <div>
        <h2>Books</h2>
        <select
          defaultValue="Pick a text editor"
          className="select select-primary">
          <option disabled={true}>Pick a text editor</option>
          <option>VScode</option>
          <option>VScode fork</option>
          <option>Another VScode fork</option>
        </select>
      </div>
    </div>
  );
};

export default ListedBookItem;
