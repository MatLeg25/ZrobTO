import React from 'react';
import AddOffer from "../offerManager/AddOffer"
import {Button, Modal} from 'react-bootstrap'


class OfferForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            show:false,
            offers : [],
            placeholders : props.data,
            }
            console.log(props)
        }

    handleModal() {
        this.setState({show: !this.state.show});
        //this.getAllOffers(); // reload from DB after add new offer
    }


    render() {

    return(<div>

    {/* <!-- Button trigger modal --> */}
    <Button className="btn btn-dark" onClick={() => this.handleModal()}> Manage offers! </Button>

      <Modal show={this.state.show} onHide={() => this.handleModal()} >
      <Modal.Header className="btn btn-dark"> Modal Head Part</Modal.Header>
      <Modal.Body>
                  <AddOffer data={this.state.placeholders} />
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-dark" onClick={() => this.handleModal()}>Close Modal</button>
      </Modal.Footer>
      </Modal>

    </div>)
}
}
    
export default OfferForm;