const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch('82VLS1TU5K', 'bfdc9eff848b16b6167efaa4a84d5e27');

const search = instantsearch({
  indexName: 'front_end_dev_pages',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
  
});


search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
      <article>
        <div>
          <h1>${components.Highlight({hit, attribute: "name"})}</h1>
        </div>
      </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();

