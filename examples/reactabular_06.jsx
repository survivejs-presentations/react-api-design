columns: [
  {
    property: 'country',
    header: {
      label: 'Country'
    },
    cell: {
      transforms: [
        editable(
          edit.dropdown({
            options: transform(countries, (result, name, value) => {
              result.push({ value, name });
            }, [])
          })
        )
      ],
      format: highlight.cell,
      // Resolve hint for search and highlighting
      resolve: country => countries[country]
    }
  },
  {
    cell: {
      format: (value, { rowData }) => (
        <span
          className="remove"
          onClick={() => this.onRemove(rowData.id)}
        >
          &#10007;
        </span>
      )
    }
  }
]