import React from 'react';
import './Sector.css';

const Sector = () => {
    const sectorItem = (icon, title, text) => (
        <div className="our-sector__box-wrap">
            <span className={`icon ${icon}`}><span className="path1"></span><span className="path2"></span></span>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );

    return (
        <section className="our-sector">
        <div className="container text-center">
            <h2 className="heading__title">Our Sectors</h2>
            <p className="sub__title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam<br/> nonumy eirmod tempor invidunt ut.
            </p>
            <div className="our-sector__inner">
                {
                    sectorItem('icon-Group-5386', 'Lorem ipsum dolor sit amet, consetetur', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.')
                }
                {
                    sectorItem('icon-Group-5387', 'Lorem ipsum dolor sit amet, consetetur', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.')
                }
                {
                    sectorItem('icon-Group-5388', 'Lorem ipsum dolor sit amet, consetetur', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.')
                }
                {
                    sectorItem('icon-Group-5389', 'Lorem ipsum dolor sit amet, consetetur', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.')
                }
                {
                    sectorItem('icon-Group-5390', 'Lorem ipsum dolor sit amet, consetetur', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.')
                }
                {
                    sectorItem('icon-Group-5391', 'Lorem ipsum dolor sit amet, consetetur', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.')
                }
                {
                    sectorItem('icon-Group-5392', 'Lorem ipsum dolor sit amet, consetetur', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.')
                }
            </div>
        </div>
    </section>
    )
}

export default Sector
