columns: [
  {
    property: 'country',
    header: 'Country',
    formatter: country => find(countries, 'value', country).name,
    editor: editors.dropdown(countries)
  },
  {
    cell: (i => {
      var remove = () => {
        // This could go through flux etc.
        var data = this.state.data;

        this.setState({
          data: data.slice(0, i).concat(data.slice(i + 1))
        });
      };

      return <span onClick={remove.bind(this)}>&#10007;</span>;
    }).bind(this)
  }
]