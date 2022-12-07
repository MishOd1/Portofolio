import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "../index2.css";
import World from "../assets/me.png";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-scroll";

export default function CardDemo() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const header = (
    <img alt="Card" id="img" src={World} width={100} height={50} />
  );
  const footer = (
    <span>
      <Button className="Button">
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
        Let's Collaborate
        </Link>
      </Button>
    </span>
  );

  return (
    <div className='flex'>
      <div className="hidden xl:flex">
      <Card
        className="card"
        title="Mishaal Odeh"
        subTitle="Trader/Coder/Lawyer"
        style={{ width: "11rem" }}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1.2" }}>
          Hello there, i can offer help in the following fields:<br></br><br></br><ul className="Fields"> <li>1. Quant Dev</li>
          <li>2. Front End</li> <li>3. Trading</li> <li>4. Legal Consultation</li></ul>
        </p>
      </Card>
      </div>
    </div>
  );
}
