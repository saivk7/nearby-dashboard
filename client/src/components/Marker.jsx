import React , {useState} from 'react';
import './Marker.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Marker = (props) => {
    const { color, name, index } = props;

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
            <PopoverHeader>{`${props.index +1}. `} {props.title}</PopoverHeader>
            <PopoverBody>{props.group}</PopoverBody>
        </Popover>
      </div>
    );
  };

  export default Marker;