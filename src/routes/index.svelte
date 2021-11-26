<script type="ts">
  import { onMount } from 'svelte'
  import nearApi from '$lib/@near-api-js'
  let near;
  let wallet;
  const keyStore = new nearApi.keyStores.BrowserLocalStorageKeyStore(localStorage)
  const config = {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
    nftContract: "dev-1637164324288-46265801137064",
    marketContract: "market.dev-1637164324288-46265801137064",
    keyStore
  };


  console.log(keyStore)
  const name: string = "Typescript";

  onMount(async () => {
    near = await nearApi.connect(config);
    wallet = new nearApi.WalletConnection(near, 'app');
    console.log(near)
  })
</script>

<h1>Welcome to {name}</h1>
<button on:click={() => wallet.requestSignIn(config.marketContract)}>LOGIN</button>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
