import React , {useState} from 'react';
import './Marker.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Marker = (props) => {
    const { color, name, id } = props;

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          id= "id"
          title={name}
          onClick={toggle}
        />
        <div className="pulse" />
        <Popover placement="top" isOpen={popoverOpen} target="id" toggle={toggle}>
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </div>
    );
  };

  export default Marker;