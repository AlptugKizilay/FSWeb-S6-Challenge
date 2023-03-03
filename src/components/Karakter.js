
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Karakter = (props) => {
    console.log(props.char);

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const [opener, setOpener] = useState('1');
    const toggler = (id) => {
        if (opener === id) {
            setOpener();
        } else {
            setOpener(id);
        }
    };

    return (
        <div>
            {props.char.map((char) => (
                
                <Accordion open={open} toggle={toggle} key={char.id}>
                    <AccordionItem key={char.id}>
                        <AccordionHeader targetId={char.name} key={char.id}  > {char.name} </AccordionHeader>
                        <AccordionBody accordionId={char.name} key={char.id}>
                            <strong>Gender:</strong> {char.gender} <br />
                            <strong>Height:</strong> {char.height}<br />
                            <strong>Mass:</strong> {char.mass}<br />
                            <strong>BirthYear:</strong> {char.birth_year}<br />
                            <strong>Eye Color:</strong>{char.eye_color}<br />
                            <strong>Hair Color:</strong> {char.hair_color}<br />
                            <strong>Skin Color:</strong> {char.skin_color}<br />
                            

                           <div>
                                {char.films.map((film,index) => (
                                    <Accordion open={opener} toggle={toggler} key={index}>
                                        <AccordionItem key={index}>
                                            <AccordionHeader targetId={film} key={index}> {film} </AccordionHeader>
                                            <AccordionBody accordionId={film} key={index}>
                                            {film}

                                            </AccordionBody>

                                        </AccordionItem>
                                    </Accordion>
                                ))}
                            </div> 
 




                        </AccordionBody>

                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}
export default Karakter;