
import OffcanvasExample from '../navbar';

const News = () => {
return(

    <div>
        <OffcanvasExample/>
    <h1>News</h1>
    <h2>Latest News</h2>
    <li>
    08/08/2024 Following a community vote, the new warthog slogan is : "Warthog’s decentralized network empowers individuals with fair, balanced, and synergized CPU/GPU work. It secures hardcoded DeFi and token technologies, eliminating the risks of smart contracts. Our goal is a safer, more efficient blockchain, aligned with the original vision of cryptocurrency: "one CPU, one vote." by TheFunVampire
18/07/24-19/07/24 Coordinate fork with pools and exchanges.
11/07/24-17/07/24 Research and implement first draft of new matching engine.
10/07/24 Release version 0.6.0 and inform exchanges about the necessary node upgrade (hard fork).
09/07/24 Add slogan and mission statement to website. Research about custom matching engine.
06/07/24 Add much more detail about warthog features and roadmap to website.
05/07/24 Research about custom DeFi matching engine.
04/07/24 Helping Crispin pool with finding bug in pool update.
03/07/24 Assisting pools with implementation of verushash v2.1 to v2.2 update.
02/07/24 We spotted some issues with iedoc's latest miner update and are investigating.
01/07/24 Shifu started to experiment with DeFi functionality. It seems to be possible to solve the sandwich (more info soon).
30/06/24 We evaluated Dokku as possible tool for automating website upload to the virtual server.
29/06/24 We rented a virtual server to host the browser-node website.
29/06/24 We updated switched to Cloudflare name servers for all of our website infrastructure.
    </li>
    
    <h2>Current Tasks</h2>
    <li>
        Find a way to integrate the virtual server using Dokku and GitHub pages.
Upload the browser node website (currently only supporting Websocket connections).
Assisting iedoc and pool devs for the upcoming PoBW change from Verushash v2.1 to Verushash v2.2.
Fixing bug on network-refactor branch that leads to a crash.
</li>
<h2>Upcoming Tasks</h2>
<li>Upcoming Tasks
Integrate Re's improved design for browser nodes.
Extend browser node connect capability to support real peer-to-peer communication over WebRTC.
Research about new DeFi functionalities to merge order based and liquidity pool based implementation.
</li>
    </div>
    )
}

export default News;