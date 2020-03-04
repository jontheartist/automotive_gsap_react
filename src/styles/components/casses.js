import React from 'react';
import { ReactComponent as CasesNext } from '../components/assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../components/assets/arrow-left.svg';

const caseStudies = [
    {
        id: 1,
        subtitle: '2008 Mercedes-Benz SLR McLaren',
        title: "£299,99",
        img: 'mercedes'
    },
    {
        id: 2,
        subtitle: '2015 Ferrari F12 Berlinetta',
        title: "£249,995",
        img: 'ferrari'
    },
    {
        id: 3,
        subtitle: '2019 Aston Martin Superleggera',
        title: "£239,969",
        img: 'aston'
    }
]


const Casses = () => {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <CasesPrev />

                    </div>
                    <div className="cases-arrow next">
                        <CasesNext />
                    </div>
                </div>
                <div className="row">
                    {caseStudies.map((caseItem) => (
                        <div className="case" key={caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2> {caseItem.title}</h2>
                            </div>
                            <div className="case-image">
                                <img
                                    src={require(`../components/assets/${caseItem.img}.png`)}
                                    alt={caseItem.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Casses;
