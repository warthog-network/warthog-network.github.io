import OffcanvasExample from '../navbar';


const Getstarted =()=>{



    return(
        <div>
            <OffcanvasExample/>
            
    <h1>WALLETS—NODE—MINING—BUYING</h1>
        <section>
            <h2>WALLETS</h2>
            <p>To get started with Warthog network, you need first to create your wallet. 
                You can currently choose between 3 wallet solutions. 
                Each of them need an instance of the node, local or public</p>
        </section>
        <section>
            <h2>1- wart dapp (GUI)</h2>
            <p>WART DAPP is a GUI wallet working on Windows and Linux. It works with a node. 
                You can connect it with one click to a public node, or manually type your node IP.</p>
               <li>
                <a href="https://github.com/warthog-network/wart-dapp/releases">Download</a><br/>
                </li>
                <li>
                <a href="https://www.warthog.network/docs/guides/wart-dapp/">Guide</a>
                </li>
        </section>
        <section>
            <h2>2- wart-wallet (GUI)</h2>
            <p>WART WALLET is also GUI wallet working on Windows and Linux. It works with a node. You have to manually type your node IP (local or public)
</p>
        <li>
                <a href="https://github.com/warthog-network/wart-wallet/releases">Download</a><br/>
                </li>
                <li>
                <a href="https://github.com/warthog-network/wart-wallet/blob/master/README.md">Guide</a>
                </li>
        </section>
        <section>
            <h2>3- wart-wallet (command-line)</h2>
            <p>This is the original Warthog wallet, developped with the node and working on command-line.</p>
                <li>
                <a href="https://github.com/warthog-network/Warthog/releases">Download</a><br/>
                </li>
                <li>
                <a href="https://www.warthog.network/docs/guides/wart-wallet/">Guide</a>
                </li>
        </section>
        <section>
            <h2>NODE</h2>
            <p>See here if you want to install your node on your computer (to support the blockchain decentralization, to use your wallet with a local node, or to mine solo for examples.)</p>
                <li>
                <a href="https://github.com/warthog-network/Warthog/releases">Download</a><br/>
                </li>
                <li>
                <a href="https://www.warthog.network/docs/guides/node/">Guide</a>
                </li>
        </section>
        <section>
            <h2>MINING</h2>
            <p>Once you have created your wallet. You can start mining Warthog. Either solo on your own node, or on a pool. Mining Warthog through the Proof of Balanced Work algo (called Janushash) will use your CPU and GPU at the same time on your worker.</p>
               <h2>1- MINING GUIDE</h2>
               <p>See this guide to start mining now :</p>
                <li>
                <a href="https://www.warthog.network/docs/guides/mining-quickstart/">English</a><br/>
                </li>
                <li>
                <a href="https://www.warthog.network/docs/guides/mining-quickstart_fr/">French</a>
                </li>
                <h2>2- POOLS</h2>
               <p>See here for a list of pools :</p>
                <li>
                <a href="https://miningpoolstats.stream/warthog">Miningpoolstats</a><br/>
                </li>
                <li>
                <a href="https://www.warthog.network/docs/links/#pools">Docs</a>
                </li>
        </section>
        <div>
            <h1>BUYING</h1>
            <button><h2>exchange</h2></button>
            <button><h2>exchange</h2></button>
            <button><h2>exchange</h2></button>
            <button><h2>exchange</h2></button>
            <button><h2>exchange</h2></button>
        </div>
        </div>
    )
}

export default Getstarted;