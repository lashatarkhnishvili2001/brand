import Banner from './Banner'
import CardRight from './CardRight'
import Category from './Category'
import './index.css'

const SectionMain = () => {
    return (
        <section className="sectionMain">
            <div className="sectionMain-container">
                <Category/>
                <Banner/>
                <CardRight/>
            </div>
        </section>
    )
}

export default SectionMain