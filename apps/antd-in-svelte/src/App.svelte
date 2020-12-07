<script lang="ts">
  import Table from "./Table.svelte";
  import { html } from "htm/react";

  let dataSource = [
    { id: "vue", vote: 0 },
    { id: "react", vote: 0 },
  ];

  function addVote(id) {
    dataSource.forEach((item, index) => {
      if (item.id === id) dataSource[index].vote++;
    });
  }

  let columns = [
    {
      title: "id",
      dataIndex: "id",
      render: (id) => html`<button onClick=${() => addVote(id)}>vote for: ${id}</button>`,
    },
    {
      title: "vote",
      dataIndex: "vote",
    },
  ];
</script>

<Table props={{ dataSource, columns, rowKey: 'id' }} />
