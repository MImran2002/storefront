import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        <img className = "roof" src="..\src\assets\store-roof-icon-shop-roof-icon-vector.jpg"></img>
        <div className="store">
          <h1>Berea Community Favorites</h1>
          <table>
            <tr>
              <td>
                <Card storeName="Masala Dining" type="Indian Food" link="https://www.masalafinecuisine.com/" img="..\src\assets\hcmp95634_464079.jpeg"/>
              </td>
              <td>
                <Card storeName="Dona Maria" type="Mexican" link="https://donamariatogo.menufy.com/" img="..\src\assets\dona-maria-s-is-not-to.jpg"/>
              </td>
              <td>
                <Card storeName="KFC" type="FastFood" link="https://www.kfc.com/menu" img="..\src\assets\271231637_473787204106774_901870469768060045_n-2.jpg"/>
              </td>
              <td>
                <Card storeName="Popeyes" type="Southern" link="https://www.popeyes.com/" img="..\src\assets\Popeyes_Louisiana_Kitchen_(51195358373).jpg"/>
              </td>
            </tr>
            <tr>
              <td>
                <Card storeName="Yamato" type="Japanese" link="https://www.yamatoberea.com/" img="..\src\assets\Taco-Bell-58060-detailp.jpeg"/>
              </td>
              <td>
                <Card storeName="Fireside Gallery" type="Gallery" link="https://visitberea.com/shopping/appalachian-fireside-gallery/?_gl=1*146tz0z*_ga*MTM4MDYwODI1MC4xNzQwOTQyMjQz*_ga_0ZVPKK5DFD*MTc0MDk2NTEyNS4yLjEuMTc0MDk2NzExMC4wLjAuMA.." img="..\src\assets\AppalachianFireside-Estelles-2017_1000_800_s_c1.jpg"/>
              </td>
              <td>
                <Card storeName="Fudge Shop" type="Ice Cream" link="https://visitberea.com/shopping/berea-fudge-shoppe/?_gl=1*j3icsf*_ga*MTM4MDYwODI1MC4xNzQwOTQyMjQz*_ga_0ZVPKK5DFD*MTc0MDk2NTEyNS4yLjEuMTc0MDk2NjgyNy4wLjAuMA.." img="..\src\assets\BereaFudge2-2017_1000_800_s_c1.jpg"/>
              </td>
              <td>
                <Card storeName="GOKY" type="Outdoors" link="https://visitberea.com/shopping/get-outside-ky/?_gl=1*14t2lfu*_ga*MTM4MDYwODI1MC4xNzQwOTQyMjQz*_ga_0ZVPKK5DFD*MTc0MDk2NTEyNS4yLjEuMTc0MDk2Njc0My4wLjAuMA.." img="..\src\assets\get_outside_1_1000_800_s_c1.jpg"/>
              </td>
            </tr>
            <tr>
              <td>
                <Card storeName="Honeysuckle" type="Decoration" link="https://visitberea.com/shopping/honeysuckle-vine/?_gl=1*xd2mrv*_ga*MTM4MDYwODI1MC4xNzQwOTQyMjQz*_ga_0ZVPKK5DFD*MTc0MDk2NTEyNS4yLjEuMTc0MDk2NjQ2OS4wLjAuMA.." img="..\src\assets\HoneysuckleVine-June2016-20_1000_800_s_c1.jpg"/>
              </td>
              <td>
                <Card storeName="Taleless Dog" type="Book Store" link="https://www.thetalelessdog.com/#/" img="..\src\assets\taleless-scaled.jpg"/>
              </td>
              <td>
                <Card storeName="Sunhouse Craft" type="Craft" link="https://www.sunhousecraft.com/" img="..\src\assets\324559456_1092808812116257_7903715336280312943_n.jpg"/>
              </td>
              <td>
                <Card storeName="Shawn's" type="Flea Market" link="https://visitberea.com/shopping/shawns-flea-market/?_gl=1*1hl67b4*_ga*MTM4MDYwODI1MC4xNzQwOTQyMjQz*_ga_0ZVPKK5DFD*MTc0MDk2NTEyNS4yLjEuMTc0MDk2NTY4Ny4wLjAuMA.." img="..\src\assets\ShawnsFlea-2017_1000_800_s_c1.jpg"/>
              </td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default App
