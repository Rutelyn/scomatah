import grittyOP1 from "../images/grittyOPouch1.jpg"
import grittyOP3 from "../images/grittyOPouch3.jpg"
import grittyOS1 from "../images/grittyOSac1.jpg"
import grittyOS2 from "../images/grittyOSac2.jpg"
import grittyPP1 from "../images/grittyPPouch1.jpg"
import grittyPP3 from "../images/grittyPPouch3.jpg"
import grittyPS1 from "../images/grittyPSac1.jpg"
import grittyPS2 from "../images/grittyPSac2.jpg"
import tainIce1 from "../images/tainIce1.png"
import tainIce3 from "../images/tainIce3.jpg"
import tainIS1 from "../images/tainIceSac1.jpg"
import tainIS2 from "../images/tainIceSac2.jpg"
import tainStraw3 from "../images/tainIceStraw3.jpg"
import tainStraw1 from "../images/tainIceStraw1.jpg"
import tainStrawSac2 from "../images/tainStrawSac2.jpg"
import tainStrawSac1 from "../images/tainStrawSac1.jpg"
import tainVan3 from "../images/tainIceVan3.jpg"
import tainVan2 from "../images/tainIceVan2.jpg"
import tainIceVan2 from "../images/tainVanSac2.jpg"
import tainIceVan1 from "../images/tainVanSac1.jpg"
import yoddyCan1 from "../images/yoddyCan1.jpg"
import yoddyCan3 from "../images/yoddyCan3.jpg"
import yoddySac1 from "../images/yoddySac1.jpg"
import yoddySac2 from "../images/yoddySac2.jpg"
import ProductsCard from "./productsCard"


const Products = () => {
  return (
    <div className="relative grid grid-cols gap-4">
      <div className=" text-center font-serif fond-bold text-4xl"> <h1> Our Products</h1></div>

      <div className="flex flex-wrap gap-6 justify-center">
        <ProductsCard images={[grittyOP3, grittyOP1,]} title="Gritty Original (Big Pouch)" />
        <ProductsCard images={[grittyOS1, grittyOS2]} title="Gritty Original (Sachet)" />
        <ProductsCard images={[grittyPP3, grittyPP1,]} title="Gritty Plus (Big Pouch)" />
        <ProductsCard images={[grittyPS1, grittyPS2]} title="Gritty Plus (Sachet)" />
        <ProductsCard images={[tainIce3, tainIce1]} title="Tain Ice Original (Bowl)" />
        <ProductsCard images={[tainIS2, tainIS1]} title="Tain Ice Original (Sachet)" />
        <ProductsCard images={[tainStraw3, tainStraw1]} title="Tain Ice Strawberry (Bowl)" />
        <ProductsCard images={[tainStrawSac2, tainStrawSac1]} title="Tain Ice Strawberry (Sachet)" />
        <ProductsCard images={[tainVan3, tainVan2]} title="Tain Ice Vanilla (Bowl)" />
        <ProductsCard images={[tainIceVan2, tainIceVan1]} title="Tain Ice Vanilla (Sachet)" />
        <ProductsCard images={[yoddyCan3, yoddyCan1]} title="Yoddy (Can)" />
        <ProductsCard images={[yoddySac2, yoddySac1]} title="Yoddy (Sachet)" />
      </div>

    </div>
  )
}

export default Products