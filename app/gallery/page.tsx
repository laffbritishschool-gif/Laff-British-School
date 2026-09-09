import SiteHeader from '@/app/components/site-header';
import SiteFooter from '@/app/components/site-footer';
const items=['Our School','Learning Spaces','Student Activities','Sports','Cultural Events','Graduation'];
export default function GalleryPage(){return <><SiteHeader/><main><section className="page-hero"><span className="eyebrow">Gallery</span><h1>See school life in action.</h1><p>A visual collection of our learning environment, activities and community moments.</p></section><section className="section"><div className="gallery-grid">{items.map((item,i)=><div className="gallery-tile" key={item}><div className="gallery-number">0{i+1}</div><h3>{item}</h3><p>Photo gallery</p></div>)}</div></section></main><SiteFooter/></>}
