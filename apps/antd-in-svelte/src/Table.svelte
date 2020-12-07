<script lang="ts">
  import ReactComponent from "svelte-react";
  import Table from "antd/lib/table";
  import type { TableProps } from "antd/lib/table";
  export let props: TableProps<any>;
</script>

<ReactComponent this={Table} {...props} />
